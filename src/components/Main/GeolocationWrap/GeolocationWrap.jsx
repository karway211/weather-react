import React, { useEffect } from 'react';
import './GeolocationWrap.scss';
import Maps from './Map/Map';
import { usePosition } from 'use-position';


const GeolocationWrap = ({setLocation, getPlace, getWeatherInit, lang}) => {

  const watch = true;
  const {
    latitude,
    longitude
  } = usePosition(watch);
console.log(usePosition(watch))
  useEffect(() => {
    if(latitude && longitude) {
      setLocation(latitude, longitude);
      getWeatherInit(latitude, longitude, lang);
      getPlace(latitude, longitude, lang);
    }
  }, [setLocation, getPlace, getWeatherInit, latitude, longitude, lang])
 
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
