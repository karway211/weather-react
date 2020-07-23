import React, {Component} from 'react';
import './WeatherDate.scss';

const WeatherDate = () => (
  <div className='weather__date'>
    <span className='weather__data-current--date'>Mon 23 july</span>
    <span className='weather__data-current--time'>22:35</span>
  </div>
);

export default WeatherDate;
