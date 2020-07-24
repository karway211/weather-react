import React, {Component} from 'react';
import './WeatherToday.scss';

const WeatherToday = ({temperature, summary, feelsLike, wind, humidity}) => {
  // debugger;
  console.log(temperature)
  return (
    <div className='weather__today'>
      <span className='weather__today-value'>{`${temperature}`}&deg;</span>
      <div className='weather__today__desc'>
        <img className='weather__today__desc-image' src="" alt="weather"/>
        <ul className='weather__today__desc__list'>
          <li className='weather__today__desc__list-item summary'>{summary}</li>
          <li className='weather__today__desc__list-item feels'>FEELS LIKE: {feelsLike}&deg;</li>
          <li className='weather__today__desc__list-item wind'>WIND: {wind} м/с</li>
          <li className='weather__today__desc__list-item humidity'>HUMIDITY: {humidity}%</li>
        </ul>
      </div>
    </div>
  )
};

export default WeatherToday;
