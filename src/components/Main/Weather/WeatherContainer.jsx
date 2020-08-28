import React from 'react';
import './Weather.scss';
import Weather from './Weather';
import { connect } from 'react-redux';
import { getWeatherInit } from '../../../thunk/getWeatherInit';

const WeatherContainer = (props) => {
  return <Weather {...props} />
}

const mapStateToProps = (state) => ({
  place: state.weatherBlock.place,
  // time: state.weatherBlock.time,
  temperature: state.weatherBlock.temperature,
  descToday: state.weatherBlock.descToday,
  weatherThreeDay: state.weatherBlock.weatherThreeDay,
  location: state.weatherBlock.location,
  lang: state.weatherBlock.lang,
})

export default connect(mapStateToProps, {getWeatherInit})(WeatherContainer);
