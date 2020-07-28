import React from 'react';
import './Header.scss';

const Header = () => (
  <header className='header'>
    <div className='header__param'>
      <button className='header__param-bth'><i className="fas fa-sync"></i></button>
      <select className='header__select'>
        {['en', 'ru', 'be'].map(el => <option className='header__select-lang' key={el}>{el}</option>)}
      </select>
      <button className='header__param-celsius'>C&deg;</button>
      <button className='header__param-fahrenheit'>F&deg;</button>
    </div>
    <div className='header__searching'>
      <input type="text" className='header__searching-city' placeholder='Search city' />
      <button className='header__searching-voice'><i className="fa fa-microphone" /></button>
      <button className='header__searching-bth'>SEARCH</button>
    </div>
  </header>
)

export default Header;
