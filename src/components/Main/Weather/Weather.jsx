import React from 'react';
import './Weather.scss';
import ThreeDays from './ThreeDays/ThreeDays';
import WeatherToday from './WeatherToday/WeatherToday';
import WeatherDate from './WeatherDate/WeatherDate';
import WeatherCity from './WeatherCity/WeatherCity';

const Weather = ({place, location, time, temperature, descToday, weatherThreeDay}) => {
  // debugger;
  return (
    <div className='weather'>
      <WeatherCity place={place} />
      <WeatherDate time={time} />
      <WeatherToday temperature={temperature} {...descToday} />
      <ThreeDays weatherThreeDay={weatherThreeDay} />
    </div>
  )
}

export default Weather;
