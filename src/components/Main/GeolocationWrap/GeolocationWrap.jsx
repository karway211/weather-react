import React, { useEffect } from 'react';
import './GeolocationWrap.scss';
import Maps from './Map/Map';
import { usePosition } from 'use-position';


const GeolocationWrap = ({setLocation, getPlace, getWeatherInit, lang, ...props}) => {
  const watch = true;
  let { latitude, longitude } = usePosition(watch);
  if (props.latitude) {
    latitude = props.latitude;
    longitude = props.longitude;
  }

  useEffect(() => {
    if(latitude && longitude) {
      !props.latitude && setLocation(latitude, longitude);
      getWeatherInit(latitude, longitude, lang);
      getPlace(latitude, longitude, lang);
    }
  }, [setLocation, getPlace, getWeatherInit, latitude, longitude, lang, props.latitude])
 
  return (
    <div className='geolocation-wrapper'>
      <div className='geolocation__map-wrapper'>
        <Maps latitude={latitude} longitude={longitude} />
      </div>
      <span className='geolocation--latitude'>{lang==='en'?'Latitude:':'Широта:'} {latitude && latitude.toFixed(2)}</span>
      <span className='geolocation--longitude'>{lang==='en'?'Longitude:':'Долгота:'} {longitude && longitude.toFixed(2)}</span>
    </div>
  )
}

export default GeolocationWrap;
