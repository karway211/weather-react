import React from 'react';
import './Main.scss';
import Main from './Main';
import { connect } from 'react-redux';
import { actionsAC } from '../../redux/weather-reducer';
import { getPlace } from '../../thunk/getPlace';
import { getWeatherInit } from '../../thunk/getWeatherInit';

const MainContainer = ({setLocation, getPlace, getWeatherInit, lang, latitude, longitude}) => (
  <Main setLocation={setLocation}
        getPlace={getPlace}
        getWeatherInit={getWeatherInit}
        lang={lang}
        latitude={latitude}
        longitude={longitude} />
);

const mapStateToProps = (state) => ({
  lang: state.weatherBlock.lang,
  latitude: state.weatherBlock.location.latitude,
  longitude: state.weatherBlock.location.longitude,
})

export default connect(mapStateToProps, {setLocation: actionsAC.setLocation, getPlace, getWeatherInit})(MainContainer);
