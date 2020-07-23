import React, {Component} from 'react';
import './Main.scss';
import Weather from './Weather/Weather';
import GeolocationWrap from './GeolocationWrap/GeolocationWrap';

const Main = () => (
  <main className='main'>
    <Weather />
    <GeolocationWrap />
  </main>
);

export default Main;
