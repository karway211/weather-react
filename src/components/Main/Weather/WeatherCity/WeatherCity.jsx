import React, {Component} from 'react';
import './WeatherCity.scss';

const WeatherCity = ({city, country}) => (
  <>
    <h1 className='weather--city'>{`${city}, ${country}`}</h1>
  </>
);

export default WeatherCity;
