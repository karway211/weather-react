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
  // date: state.weatherBlock.date,
  time: state.weatherBlock.time,
  temperature: state.weatherBlock.temperature,
  descToday: state.weatherBlock.descToday,
  weatherThreeDay: state.weatherThreeDayBlock,
  location: state.weatherBlock.location,
})

export default connect(mapStateToProps, {getWeatherInit})(WeatherContainer);
