import React from 'react';
import './WeatherCity.scss';

const WeatherCity = ({place}) => (
  <>
    <h1 className='weather--city'>{`${place}`}</h1>
  </>
);

export default WeatherCity;
