import React from 'react';
import './Day.scss';

const Day = ({day, temperature, icon}) => {
  const image = `${process.env.PUBLIC_URL}assets/images/5m/${icon}.svg`;
  return (
    <div className='weather__three__wrapper'>
      <span className='weather__three__wrapper-name'>{day}</span>
      <div className='weather__three__wrapper__desc'>
        <span className='weather__three__wrapper__desc-temp'>{temperature}&deg;</span>
        <img className='weather__three__wrapper__desc-image' src={image} alt="Weather"/>
      </div>
    </div>
  )
};

export default Day;
