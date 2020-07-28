import React from 'react';
import './ThreeDays.scss';
import Day from './Day/Day';

const ThreeDays = ({weatherThreeDay}) => {
  
  return (
    <div className='weather__three'>
      {Object.values(weatherThreeDay).map(el => <Day key={`${el.day}ThreeDay`} day={el.day} temperature={el.temperature} icon={el.icon} />)}
    </div>
  )
};

export default ThreeDays;
