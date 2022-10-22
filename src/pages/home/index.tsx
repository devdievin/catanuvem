import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatDateZero, getDayOfWeek, getMonthName } from '../../utils/tools';
import { globals } from '../../utils/global_variables';

import Loading from '../../components/loading';
import SectionMain from '../../components/section-main';
import ContainerCustom from '../../components/container';
import CardToday from '../../components/card-today';
import CardDays from '../../components/card-days';
import CardHours from '../../components/card-hours';
import CardDetails from '../../components/card-details';
import CardNews from '../../components/card-news';
import CardInfo from '../../components/card-info';
import Header from '../../components/header';
import Footer from '../../components/footer';

import styles from './Home.module.css';

const URL_NEWS = "https://newsapi.org/v2/top-headlines?country=br&pageSize=7&apiKey=6e50b082a4c64dcc82f46cb34e2f58c8";

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
  const [cityNotFound, setCityNotFound] = useState(false);

  const { city, state } = useParams();

  useEffect(() => {
    if (city && state) {
      getWeatherCity(city, state);
    } else {
      getGeolocation();
      if (latitude !== null && longitude !== null) {
        getWeather(latitude, longitude);
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
      const response = await setResponseData(
        globals.PATH_TODAY_LOC,
        globals.PATH_DAYS_LOC,
        globals.PATH_HOURS_LOC,
        lat,
        lon,
        '&'
      );
      setWeather(response.today);
      setWeatherHours(response.hours);
      setWeatherDays(response.days);
    } catch (error) {
      console.error(error);
    }
  }

  const getWeatherCity = async (city: string, state: string) => {
    try {
      if (await checkCityExists(city, state)) {
        const response = await setResponseData(
          globals.PATH_TODAY_CITY,
          globals.PATH_DAYS_CITY,
          globals.PATH_HOURS_CITY,
          city,
          state,
          '/'
        );
        setWeather(response.today);
        setWeatherHours(response.hours);
        setWeatherDays(response.days);
      } else {
        setCityNotFound(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const setResponseData = async (path_today: string, path_days: string, path_hours: string, arg1: any, arg2: any, between_args: string) => {
    try {
      const today_response = await axios.get(`${path_today}/${arg1}${between_args}${arg2}`);
      const days_response = await axios.get(`${path_days}/${arg1}${between_args}${arg2}`);
      const hours_response = await axios.get(`${path_hours}/${arg1}${between_args}${arg2}`);
      if (hours_response) setIsLoading(false);
      return { today: today_response.data, days: days_response.data, hours: hours_response.data };
    } catch (error) {
      throw error;
    }
  }

  const checkCityExists = async (cityName: string, state: string): Promise<boolean> => {
    try {
      const response = await axios.get(`${globals.DOMAIN_API}/city/${cityName},${state}`);
      return (response.data.length > 0) ? true : false;
    } catch (error) {
      throw error;
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
                    <img src={weather.icon.src} alt={weather.icon.name} title={weather.icon.name} className={styles.iconWeather} />
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
        <Loading error={cityNotFound} message={'Cidade não encontrada!'} />
      }
    </React.Fragment>
  );
}

export default Home;
