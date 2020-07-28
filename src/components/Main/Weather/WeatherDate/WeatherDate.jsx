import React from 'react';
import './WeatherDate.scss';

const WeatherDate = ({time}) => (
  <div className='weather__date'>
    <span className='weather__date-current--date'>{`${time}`}</span>
    {/* <span className='weather__date-current--time'>{` ${hour}:${minutes}`}</span> */}
  </div>
);

export default WeatherDate;
