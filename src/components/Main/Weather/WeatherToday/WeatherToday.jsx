import React, {Component} from 'react';
import './WeatherToday.scss';

const WeatherToday = ({temperature, icon, summary, feelsLike, wind, humidity}) => {

  const image = `${process.env.PUBLIC_URL}assets/images/51/${icon}.svg`;
  
  return (
    <div className='weather__today'>
      <span className='weather__today-value'>{`${temperature}`}&deg;</span>
      <div className='weather__today__desc'>
        <img className='weather__today__desc-image' src={image} alt="weather"/>
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