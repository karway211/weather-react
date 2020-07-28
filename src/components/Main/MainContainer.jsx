import React from 'react';
import './Main.scss';
import Main from './Main';
import { connect } from 'react-redux';
import { actionsAC } from '../../redux/weather-reducer';
import { getPlace } from '../../thunk/getPlace';
import { getWeatherInit } from '../../thunk/getWeatherInit';

const MainContainer = ({setLocation, getPlace, getWeatherInit, lang}) => (
  <Main setLocation={setLocation}  getPlace={getPlace} getWeatherInit={getWeatherInit} lang={lang} />
);

const mapStateToProps = (state) => ({
  lang: state.weatherBlock.lang
})

export default connect(mapStateToProps, {setLocation: actionsAC.setLocation, getPlace, getWeatherInit})(MainContainer);
