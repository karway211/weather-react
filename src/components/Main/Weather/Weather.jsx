import React from 'react';
import './Weather.scss';
import ThreeDays from './ThreeDays/ThreeDays';
import WeatherToday from './WeatherToday/WeatherToday';
import WeatherCity from './WeatherCity/WeatherCity';
import WeatherDateContainer from './WeatherDate/WeatherDateContainer';

const Weather = ({place, temperature, descToday, weatherThreeDay}) => {
  // debugger;
  return (
    <div className='weather'>
      <WeatherCity place={place} />
      <WeatherDateContainer />
      <WeatherToday temperature={temperature} {...descToday} />
      <ThreeDays weatherThreeDay={weatherThreeDay} />
    </div>
  )
}

export default Weather;
