import React, {Component} from 'react';
import './Weather.scss';
import ThreeDays from './ThreeDays/ThreeDays';
import WeatherToday from './WeatherToday/WeatherToday';
import WeatherDate from './WeatherDate/WeatherDate';
import WeatherCity from './WeatherCity/WeatherCity';

const Weather = ({place, date, time, temperature, descToday}) => {
  console.log(descToday)
  // debugger;
  return (
    <div className='weather'>
      <WeatherCity {...place} />
      <WeatherDate {...date} {...time} />
      <WeatherToday temperature={temperature} {...descToday} />
      <ThreeDays />
    </div>
  )
}

export default Weather;
