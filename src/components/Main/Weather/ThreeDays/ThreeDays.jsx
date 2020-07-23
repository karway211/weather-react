import React, {Component} from 'react';
import './ThreeDays.scss';
import Day from './Day/Day';

const ThreeDays = () => (
  <div className='weather__three'>
    {[1,2,3].map(el => <Day key={el} />)}
  </div>
);

export default ThreeDays;
