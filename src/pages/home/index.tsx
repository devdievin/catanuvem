import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatDateZero, getDayOfWeek, getMonthName } from '../../utils/tools';

import Loading from '../../components/loading';
import SectionMain from '../../components/section-main';
import ContainerCustom from '../../components/container';

import styles from './Home.module.css';
import CardToday from '../../components/card-today';
import CardDays from '../../components/card-days';
import CardHours from '../../components/card-hours';
import CardDetails from '../../components/card-details';
import CardNews from '../../components/card-news';
import CardInfo from '../../components/card-info';
import Header from '../../components/header';
import Footer from '../../components/footer';

const URL = "https://api-catanuvem.vercel.app/weather/today/loc";
const URL_HOURS = "https://api-catanuvem.vercel.app/weather/hours/loc";
const URL_DAYS = "https://api-catanuvem.vercel.app/weather/days/loc";
const URL_NEWS = "https://newsapi.org/v2/top-headlines?country=br&pageSize=7&apiKey=6e50b082a4c64dcc82f46cb34e2f58c8";

const URL_TODAY_CITY = "https://api-catanuvem.vercel.app/weather/today/city";
const URL_HOURS_CITY = "https://api-catanuvem.vercel.app/weather/hours/city";
const URL_DAYS_CITY = "https://api-catanuvem.vercel.app/weather/days/city";

const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [dayAndMonth, setDayAndMonth] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [weather, setWeather] = useState<any | null>(null);
  const [weatherHours, setWeatherHours] = useState<any | null>(null);
  const [weatherDays, setWeatherDays] = useState<any | null>(null);
  const [news, setNews] = useState<any | null>(null);

  const { city, state } = useParams();

  useEffect(() => {
    if (city && state) {
      getWeatherCity(city, state).then((rs: any) => {
        setWeather(rs.today);
        setWeatherHours(rs.hours);
        setWeatherDays(rs.days);
      });
    } else {
      getGeolocation();
      if (latitude !== null && longitude !== null) {
        getWeather(latitude, longitude).then((rs: any) => {
          setWeather(rs.today);
          setWeatherHours(rs.hours);
          setWeatherDays(rs.days);
        });
      }
    }
    getDatetime();
    getCatanews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
      setDefaultCoordinates();
    }
  }

  const showPosition = (position: any) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const errorPosition = (error: any) => {
    if (error.code === error.PERMISSION_DENIED) {
      setDefaultCoordinates();
    }
  }

  // set default coordinates to Brasília city
  const setDefaultCoordinates = () => {
    setLatitude(-15.7801);
    setLongitude(-47.9292);
  }

  const getWeather = async (lat: number, lon: number) => {
    try {
      const today_response = await axios.get(`${URL}/${lat}&${lon}`);
      const days_response = await axios.get(`${URL_DAYS}/${lat}&${lon}`);
      const hours_response = await axios.get(`${URL_HOURS}/${lat}&${lon}`);
      if (hours_response) setIsLoading(false);
      return { today: today_response.data, days: days_response.data, hours: hours_response.data };
    } catch (error) {
      console.error(error);
    }
  }

  const getWeatherCity = async (city: string, state: string) => {
    try {
      const today_response = await axios.get(`${URL_TODAY_CITY}/${city}/${state}`);
      const days_response = await axios.get(`${URL_DAYS_CITY}/${city}/${state}`);
      const hours_response = await axios.get(`${URL_HOURS_CITY}/${city}/${state}`);
      if (hours_response) setIsLoading(false);
      return { today: today_response.data, days: days_response.data, hours: hours_response.data };
    } catch (error) {
      console.error(error);
    }
  }

  const getDatetime = () => {
    const date = new Date();
    setDayAndMonth(`${formatDateZero(date.getDate())} de ${getMonthName(date.getMonth())}`);
    setDayOfWeek(getDayOfWeek(date.getDay()));
  }

  const getCatanews = async () => {
    try {
      const response = await axios.get(URL_NEWS);
      setNews(response.data);
    } catch (error) {
      console.error("Error", error);

    }
  }

  return (
    <React.Fragment>
      {!isLoading ?
        <React.Fragment>
          <Header logo="CATANUVEM" />

          {weather &&
            <>
              <SectionMain>
                {/* Dados principais */}
                <div className={styles.mainData}>
                  <div className={styles.titleContent}>
                    <h1 className={styles.locationText}>{weather.location}</h1>
                    <h3 className={styles.dateText}>{dayAndMonth}, <span className={styles.dateStrong}>{dayOfWeek}</span></h3>
                  </div>

                  <div className={styles.iconContent}>
                    <img src={weather.icon.src} alt={weather.icon.name} className={styles.iconWeather} />
                  </div>

                  <div className={styles.temperatureContent}>
                    <h3 className={styles.temperatureText}>{weather.temperature}</h3>
                    <h4 className={styles.conditionText}>{weather.condition}</h4>
                  </div>
                </div>

                {/* Card info */}
                <CardInfo data={weather} />

                {weatherHours && <CardHours data={weatherHours.hoursForecast} />}
                <div className={styles.helpLabel}>
                  <span>&larr; Arrasta &rarr;</span>
                </div>
              </SectionMain>

              <ContainerCustom>
                <div className={styles.gridContainer}>
                  <CardDetails data={weather} />

                  <CardNews dataNews={news} />

                  {weather &&
                    <CardToday location={weather.location} data={weather.todayForecast} />
                  }

                  {weatherDays &&
                    <CardDays location={weather.location} data={weatherDays.forecastNextDays} />
                  }
                </div>
              </ContainerCustom>
            </>
          }
          <Footer />
        </React.Fragment>
        :
        <Loading />
      }
    </React.Fragment>
  );
}

export default Home;
