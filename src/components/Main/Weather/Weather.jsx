import React, {Component} from 'react';
import './Weather.scss';
import ThreeDays from './ThreeDays/ThreeDays';
import WeatherToday from './WeatherToday/WeatherToday';
import WeatherDate from './WeatherDate/WeatherDate';
import WeatherCity from './WeatherCity/WeatherCity';

const Weather = () => (
  <div className='weather'>
    <WeatherCity />
    <WeatherDate />
    <WeatherToday />
    <ThreeDays />
  </div>
)

export default Weather;
