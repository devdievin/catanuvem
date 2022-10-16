import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDateZero, getDayOfWeek, getMonthName } from '../../utils/tools';

import Spinner from '../../components/spinner';
import SectionMain from '../../components/section-main';
import ContainerCustom from '../../components/container';

import styles from './Home.module.css';
import CardToday from '../../components/card-today';
import CardDays from '../../components/card-days';
import CardHours from '../../components/card-hours';
import CardDetails from '../../components/card-details';
import CardNews from '../../components/card-news';
import CardInfo from '../../components/card-info';

const URL = "https://api-catanuvem.vercel.app/weather/today/loc";
const URL_HOURS = "https://api-catanuvem.vercel.app/weather/hours/loc";
const URL_DAYS = "https://api-catanuvem.vercel.app/weather/days/loc";

const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [dayAndMonth, setDayAndMonth] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [weather, setWeather] = useState<any | null>(null);
  const [weatherHours, setWeatherHours] = useState<any | null>(null);
  const [weatherDays, setWeatherDays] = useState<any | null>(null);

  useEffect(() => {
    getGeolocation();
    getDatetime();
    if (latitude !== null && longitude !== null) {
      getWeather(latitude, longitude).then((rs: any) => {
        setWeather(rs.today);
        setWeatherHours(rs.hours);
        setWeatherDays(rs.days);
      });
    }
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

  const getDatetime = () => {
    const date = new Date();
    setDayAndMonth(`${formatDateZero(date.getDate())} de ${getMonthName(date.getMonth())}`);
    setDayOfWeek(getDayOfWeek(date.getDay()));
  }

  return (
    <React.Fragment>
      {!isLoading ?
        <React.Fragment>
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
              </SectionMain>

              <ContainerCustom>
                <div className={styles.gridContainer}>
                  <CardDetails data={weather} />

                  <CardNews />

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
        </React.Fragment>
        :
        <Spinner />
      }
    </React.Fragment>
  );
}

export default Home;
