import React, {Component} from 'react';
import './Main.scss';
import Weather from './Weather/Weather';
import GeolocationWrap from './GeolocationWrap/GeolocationWrap';
import WeatherContainer from './Weather/WeatherContainer';

const Main = () => (
  <main className='main'>
    <WeatherContainer />
    <GeolocationWrap />
  </main>
);

export default Main;
