import React, {Component} from 'react';
import './WeatherDate.scss';

const WeatherDate = ({weekday, day, month, hour, minutes}) => (
  <div className='weather__date'>
    <span className='weather__date-current--date'>{`${weekday} ${day} ${month}`}</span>
    <span className='weather__date-current--time'>{` ${hour}:${minutes}`}</span>
  </div>
);

export default WeatherDate;
