import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDateZero, getDayOfWeek, getMonthName } from '../../utils/tools';
import { Card, Col, Row } from 'react-bootstrap';

import Spinner from '../../components/spinner';
import SectionMain from '../../components/section-main';
import ContainerCustom from '../../components/container';

import styles from './Home.module.css';
import CardToday from '../../components/card-today';
import CardDays from '../../components/card-days';
import CardHours from '../../components/card-hours';
import CardDetails from '../../components/card-details';

const URL = "https://api-catanuvem.vercel.app/weather/today/loc";
const URL_HOURS = "https://api-catanuvem.vercel.app/weather/hours/loc";
const URL_DAYS = "https://api-catanuvem.vercel.app/weather/days/loc";

const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [dayAndMonth, setDayAndMonth] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [weather, setWeather] = useState<any | null>(null);
  const [weatherHours, setWeatherHours] = useState<any | null>(null);
  const [weatherDays, setWeatherDays] = useState<any | null>(null);

  useEffect(() => {
    getGeolocation();
    getDatetime();
  });

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
    getWeather();
  };

  const errorPosition = (error: any) => {
    if (error.code === error.PERMISSION_DENIED) {
      setDefaultCoordinates();
      getWeather();
    }
  }

  // set default coordinates to Brasília city
  const setDefaultCoordinates = () => {
    setLatitude(-15.7801);
    setLongitude(-47.9292);
  }

  const getWeather = async () => {
    try {
      const response = await axios.get(`${URL}/${latitude}&${longitude}`);
      setWeather(response.data);
      const other_response = await axios.get(`${URL_DAYS}/${latitude}&${longitude}`);
      setWeatherDays(other_response.data);
      const other_response2 = await axios.get(`${URL_HOURS}/${latitude}&${longitude}`);
      setWeatherHours(other_response2.data);
      if (weather !== null && weatherDays !== null && weatherHours !== null) setIsLoading(false);
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
                    <img src={"/icons/icon-cloud-test.svg"} alt="icone teste" width={200} height={'auto'} />
                  </div>

                  <div className={styles.temperatureContent}>
                    <h3 className={styles.temperatureText}>{weather.temperature}</h3>
                    <h4 className={styles.conditionText}>{weather.condition}</h4>
                  </div>
                </div>

                {/* Card info */}
                <div className={styles.cardInfo}>
                  <Row>
                    <Col className={styles.colItem}>
                      <div className='text-center'>
                        <p>Probabilidade de chuva</p>
                        <p>{weather.rainProbability}</p>
                      </div>
                    </Col>

                    <Col className={styles.colItem}>
                      <div className='text-center'>
                        <p>Vento</p>
                        <p>{weather.wind}</p>
                      </div>
                    </Col>

                    <Col className={styles.colItem}>
                      <div className='text-center'>
                        <p>Umidade</p>
                        <p>{weather.humidity}</p>
                      </div>
                    </Col>

                    <Col className={styles.colItem}>
                      <div className='text-center'>
                        <p>Sensação térmica</p>
                        <p>{weather.thermalSensation}</p>
                      </div>
                    </Col>
                  </Row>
                </div>

                {weatherHours.hoursForecast && <CardHours data={weatherHours.hoursForecast} />}
              </SectionMain>

              <ContainerCustom>
                <div className={styles.gridContainer}>
                  {/* Card relatório detalhado */}
                  <CardDetails data={weather} />

                  {/* Card notícias */}
                  <Card id='catanews_card'>
                    <Card.Body>
                      <h5><strong>CataNews</strong></h5>
                      <p>O que está acontecendo no Brasil hoje?</p>
                    </Card.Body>
                  </Card>

                  {/* Card previsão para hoje */}
                  {weather.todayForecast &&
                    <CardToday location={weather.location} data={weather.todayForecast} />
                  }

                  {/* Card previsão para os próximos cinco dias */}
                  {weatherDays.forecastNextDays &&
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
