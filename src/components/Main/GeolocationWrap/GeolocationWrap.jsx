import React, {Component} from 'react';
import './GeolocationWrap.scss';
import Maps from './Map/Map';
import { usePosition } from 'use-position';
import { forecast } from '../../../api/forecastAPI';


const GeolocationWrap = () => {

  const watch = true;
  const {
    latitude,
    longitude
  } = usePosition(watch);
  // let data;
  // const getData = async () => {
  //     data = await forecast.getForecast('53','33','ru');
  //     console.log(data.daily);
  // }

  // getData();

  return (
    <div className='geolocation-wrapper'>
      <div className='geolocation__map-wrapper'>
        <Maps latitude={latitude} longitude={longitude} />
      </div>
      <span className='geolocation--latitude'>Latitude: {latitude && latitude.toFixed(2)}</span>
      <span className='geolocation--longitude'>Longitude: {longitude && longitude.toFixed(2)}</span>
    </div>
  )
}

export default GeolocationWrap;
