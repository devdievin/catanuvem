import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDateZero, getDayOfWeek, getMonthName } from '../../utils/tools';
import { Card, Col, Row } from 'react-bootstrap';

import Spinner from '../../components/spinner';
import SectionMain from '../../components/section-main';
import ContainerCustom from '../../components/container';

import styles from './Home.module.css';
import CardToday from '../../components/card-today';

const URL = "https://api-catanuvem.vercel.app/weather/today/loc";

const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [dayAndMonth, setDayAndMonth] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [weather, setWeather] = useState<any | null>(null);

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
      if (weather !== null) setIsLoading(false);
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
          <SectionMain>
            {/* Dados principais */}
            <div className={styles.mainData}>
              <div className={styles.titleContent}>
                <h1 className={styles.locationText}>{weather.location}</h1>
                <h3 className={styles.dateText}>{dayAndMonth}, <span className={styles.dateStrong}>{dayOfWeek}</span></h3>
              </div>

              <Row>
                <Col>
                  <h3 className={styles.temperatureText}>{weather.temperature}</h3>
                  <h4 className={styles.conditionText}>{weather.condition}</h4>
                </Col>
                <Col>
                  <img src={"/icons/icon-cloud-test.svg"} alt="icone teste" width={200} height={'auto'} />
                </Col>
              </Row>
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

            {/* Cards */}

            <div className={styles.mainCards}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p>Agora</p>
                  <p>22°</p>
                  <img className={styles.cardIconWeather} src="/icons/icon-cloud-2.svg" alt="icon test" width={64} height={64} />
                  <p>
                    <span>
                      <img className='me-1' src="/icons/icon-cloud-rain.svg" alt="ícone previsão de chuva" width={16} height={16} />
                    </span>
                    28%
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p>Agora</p>
                  <p>22°</p>
                  <img className={styles.cardIconWeather} src="/icons/icon-cloud-2.svg" alt="icon test" width={64} height={64} />
                  <p>
                    <span>
                      <img className='me-1' src="/icons/icon-cloud-rain.svg" alt="ícone previsão de chuva" width={16} height={16} />
                    </span>
                    28%
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p>Agora</p>
                  <p>22°</p>
                  <img className={styles.cardIconWeather} src="/icons/icon-cloud-2.svg" alt="icon test" width={64} height={64} />
                  <p>
                    <span>
                      <img className='me-1' src="/icons/icon-cloud-rain.svg" alt="ícone previsão de chuva" width={16} height={16} />
                    </span>
                    28%
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p>Agora</p>
                  <p>22°</p>
                  <img className={styles.cardIconWeather} src="/icons/icon-cloud-2.svg" alt="icon test" width={64} height={64} />
                  <p>
                    <span>
                      <img className='me-1' src="/icons/icon-cloud-rain.svg" alt="ícone previsão de chuva" width={16} height={16} />
                    </span>
                    28%
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p>Agora</p>
                  <p>22°</p>
                  <img className={styles.cardIconWeather} src="/icons/icon-cloud-2.svg" alt="icon test" width={64} height={64} />
                  <p>
                    <span>
                      <img className='me-1' src="/icons/icon-cloud-rain.svg" alt="ícone previsão de chuva" width={16} height={16} />
                    </span>
                    28%
                  </p>
                </div>
              </div>
            </div>
          </SectionMain>

          {weather && <ContainerCustom>
            <div className={styles.gridContainer}>
              <Card>
                <Card.Body>
                  <h5>Detalhes do clima hoje em <span>{weather.location}</span></h5>
                  <h1>{weather.temperature}</h1>

                  <Row>
                    <Col className={`${styles.cardItemCol} me-2`}>
                      <span >Condição:</span>
                      <span>{weather.condition}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                      <span>Ponto de Orvalho:</span>
                      <span>{weather.dewPoint}</span>
                    </Col>
                  </Row>

                  <Row>
                    <Col className={`${styles.cardItemCol} me-2`}>
                      <span >Probabilidade de chuva:</span>
                      <span>{weather.rainProbability}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                      <span>Visibilidade:</span>
                      <span>{weather.visibility}</span>
                    </Col>
                  </Row>

                  <Row>
                    <Col className={`${styles.cardItemCol} me-2`}>
                      <span >Máx./Mín:</span>
                      {weather.climateVariation && <span>{weather.climateVariation.max}/{weather.climateVariation.min}</span>}
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                      <span>Fase da lua:</span>
                      <span>{weather.moon}</span>
                    </Col>
                  </Row>

                  <Row>
                    <Col className={`${styles.cardItemCol} me-2`}>
                      <span >Sensação térmica:</span>
                      <span>{weather.thermalSensation}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                      <span>Qualidade do ar:</span>
                      {weather.airQuality && <span>{weather.airQuality.quality}</span>}
                    </Col>
                  </Row>

                  <Row>
                    <Col className={`${styles.cardItemCol} me-2`}>
                      <span >Vento:</span>
                      <span>{weather.wind}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                      <span>Nascer do sol:</span>
                      {weather.sun && <span>{weather.sun.sunrise}</span>}
                    </Col>
                  </Row>

                  <Row>
                    <Col className={`${styles.cardItemCol} me-2`}>
                      <span >Umidade:</span>
                      <span>{weather.humidity}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                      <span>Pôr do sol:</span>
                      {weather.sun && <span>{weather.sun.sunset}</span>}
                    </Col>
                  </Row>

                </Card.Body>
              </Card>

              <Card id='catanews_card'>
                <Card.Body>
                  <h5><strong>CataNews</strong></h5>
                  <p>O que está acontecendo no Brasil hoje?</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h5>A previsão do tempo para hoje em <span>{weather.location}</span></h5>
                  {weather.todayForecast &&
                    <CardToday data={weather.todayForecast}>
                      <h5>Teste</h5>
                    </CardToday>
                  }
                </Card.Body>
              </Card>

              <Card id={styles.nextDaysCard}>
                <Card.Body>
                  <h5>A previsão dos próximos 5 dias em <span>{weather.location}</span></h5>
                </Card.Body>
              </Card>

            </div>
          </ContainerCustom>
          }
        </React.Fragment>
        :
        <Spinner />
      }
    </React.Fragment>
  );
}

export default Home;
