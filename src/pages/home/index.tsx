import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

import Spinner from '../../components/spinner';

const URL = "https://api-catanuvem.vercel.app/weather/today/loc";
// const URL = "https://weather.contrateumdev.com.br/api/weather";

const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState<any | null>(null);

  useEffect(() => {
    getGeolocation();
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

  return (
    <React.Fragment>
      {!isLoading ?
        <React.Fragment>

          <h4>Minhas coordenadas:</h4>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>

          {/* <input type="text" placeholder='Insira a cidade' onChange={(event) => setCity(event.target.value)} /> */}
          {/* <button type='button' onClick={() => console.log("Clicou")}>Pesquisar</button> */}

          <hr />

          <div className='d-block'>
            {weather.location && <p className='mr-1'>Local: {weather.location}</p>}
            {weather.location && <p className='mr-1'>Temperatura: {weather.temperature}</p>}
            {weather.location && <p className='mr-1'>Condição: {weather.condition}</p>}
            {weather.location && <p className='mr-1'>Probabilidade de chuva: {weather.rainProbability}</p>}
            {weather.location && <p className='mr-1'>Sensação térmica: {weather.thermalSensation}</p>}
            {weather.location && <p className='mr-1'>Vento: {weather.wind}</p>}
            {weather.location && <p className='mr-1'>Umidade: {weather.humidity}</p>}
            {weather.location && <p className='mr-1'>Ponto de orvalho: {weather.dewPoint}</p>}
            {weather.location && <p className='mr-1'>Visibilidade: {weather.visibility}</p>}
            {weather.location && <p className='mr-1'>Lua: {weather.moon}</p>}
          </div>
        </React.Fragment>
        :
        <Spinner />
      }
    </React.Fragment>
  );
}

export default Home;
