import React, {Component} from 'react';
import './GeolocationWrap.scss';
import map from '../../../assets/images/Map.png';

const GeolocationWrap = () => (
  <div className='geolocation-wrapper'>
    <div className='geolocation__map-wrapper'>
      <img src={map} alt=""/>
    </div>
    <span className='geolocation--latitude'>53.33</span>
    <span className='geolocation--longitude'>23.82</span>
  </div>
)

export default GeolocationWrap;
