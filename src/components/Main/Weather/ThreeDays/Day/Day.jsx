import React, {Component} from 'react';
import './Day.scss';

const Day = () => (
  <div className='weather__three__wrapper'>
    <span className='weather__three__wrapper-name'>Friday</span>
    <div className='weather__three__wrapper__desc'>
      <span className='weather__three__wrapper__desc-temp'>15*</span>
      <img className='weather__three__wrapper__desc-image' src="" alt="Weather"/>
    </div>
  </div>
);

export default Day;
