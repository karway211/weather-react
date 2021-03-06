import React from 'react';
import './WeatherToday.scss';

const WeatherToday = ({temperature, icon, summary, feelsLike, wind, humidity, lang}) => {

  const image = `../../../../assets/images/51/${icon}.svg`;
  const plug = 'https://dummyimage.com/90';
  // const image = `${process.env.PUBLIC_URL}assets/images/51/${icon}.svg`;
  return (
    <div className='weather__today'>
      <span className='weather__today-value'>{`${temperature}`}&deg;</span>
      <div className='weather__today__desc'>
        <img className='weather__today__desc-image' src={image || plug} alt="weather"/>
        <ul className='weather__today__desc__list'>
          <li className='weather__today__desc__list-item summary'>{summary}</li>
          <li className='weather__today__desc__list-item feels'>{lang==='en'?`FEELS LIKE:`:`ОЩУЩАЕТСЯ КАК:`} {feelsLike}&deg;</li>
          <li className='weather__today__desc__list-item wind'>{lang==='en'?`WIND:`:`ВЕТЕР:`} {wind} {lang==='en'?`m/s`:`м/с`}</li>
          <li className='weather__today__desc__list-item humidity'>{lang==='en'?`HUMIDITY:`:`ВЛАЖНОСТЬ:`} {Math.ceil(humidity)}%</li>
        </ul>
      </div>
    </div>
  )
};

export default WeatherToday;