import React from 'react';
import './Main.scss';
import GeolocationWrap from './GeolocationWrap/GeolocationWrap';
import WeatherContainer from './Weather/WeatherContainer';

const Main = ({setLocation, getPlace, getWeatherInit, lang}) => (
  <main className='main'>
    <WeatherContainer />
    <GeolocationWrap setLocation={setLocation}  getPlace={getPlace} getWeatherInit={getWeatherInit} lang={lang} />
  </main>
);

export default Main;
