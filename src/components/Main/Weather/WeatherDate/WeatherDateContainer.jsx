import React, { useState } from 'react';
import './WeatherDate.scss';
import WeatherDate from './WeatherDate';
import { connect } from 'react-redux';
import { actionsAC } from '../../../../redux/weather-reducer';

const WeatherDateContainer = ({time, setTime, timezone, lang}) => {

  return <WeatherDate setTime={setTime} time={time} timezone={timezone} lang={lang} />
};
const mapStateToProps = (state) => ({
  time: state.weatherBlock.time,
  timezone: state.weatherBlock.timezone,
  lang: state.weatherBlock.lang,
})

export default connect(mapStateToProps, {setTime: actionsAC.setTime})(WeatherDateContainer);
