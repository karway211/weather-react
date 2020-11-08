import React from 'react';
import './Header.scss';
import CityForm from './CityForm/CityForm';
import ButtonItem from '../../utils/Button/Button';

const Header = ({setLang, сelsius, setCelsius, setWeatherForToday, currentlyWeather,setWeatherForThreeDays, lang, threeDays, getLinkToImage}) => {
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

  const updateImage = () => {
    getLinkToImage();
  }

  return (
    <header className='header'>
      <div className='header__param'>
        <button onClick={updateImage} className='header__param-bth'><i className="fas fa-sync"></i></button>
        <select className='header__select' onChange={langChange}>
          {['en', 'ru'].map(el => <option className='header__select-lang' key={el}>{el}</option>)}
        </select>
        <ButtonItem getUnit={getCelsius} unit={'C'} сelsius={сelsius} bool={true} />
        <ButtonItem getUnit={getFahrenheit} unit={'F'} сelsius={сelsius} bool={false} />
      </div>
      <CityForm />
    </header>
  )
}

export default Header;
