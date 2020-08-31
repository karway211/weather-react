import React from 'react';
import './Header.scss';
import CityForm from './CityForm/CityForm';

const Header = ({setLang, сelsius, setCelsius, setWeatherForToday, currentlyWeather,setWeatherForThreeDays, lang, threeDays}) => {
  const langChange = e => {
    setLang(e.target.value);
  }
  const getCelsius = () => {
    setCelsius(true);
    setWeatherForToday(currentlyWeather);
    setWeatherForThreeDays(threeDays, lang);
  }
  const getFahrenheit = () => {
    setCelsius(false);
    setWeatherForToday(currentlyWeather);
    setWeatherForThreeDays(threeDays, lang);
  }

  return (
    <header className='header'>
      <div className='header__param'>
        <button className='header__param-bth'><i className="fas fa-sync"></i></button>
        <select className='header__select' onChange={langChange}>
          {['en', 'ru'].map(el => <option className='header__select-lang' key={el}>{el}</option>)}
        </select>
        <button onClick={getCelsius} className={сelsius?`${'header__param-celsius'} ${'unit-active'}`:'header__param-celsius'}>C&deg;</button>
        <button onClick={getFahrenheit} className={!сelsius?`${'header__param-fahrenheit'} ${'unit-active'}`:'header__param-fahrenheit'}>F&deg;</button>
      </div>
      <CityForm />
    </header>
  )
}

export default Header;
