import React, {Component} from 'react';
import './WeatherToday.scss';

const WeatherToday = () => (
  <div className='weather__today'>
    <span className='weather__today-value'>20*</span>
    <div className='weather__today__desc'>
      <img className='weather__today__desc-image' src="" alt="weather"/>
      <ul className='weather__today__desc__list'>
        <li className='weather__today__desc__list-item summary'>clear</li>
        <li className='weather__today__desc__list-item feels'>feels</li>
        <li className='weather__today__desc__list-item wind'>wind</li>
        <li className='weather__today__desc__list-item humidity'>humidity</li>
      </ul>
    </div>
  </div>
);

export default WeatherToday;
