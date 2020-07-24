import React, {Component} from 'react';
import './Weather.scss';
import ThreeDays from './ThreeDays/ThreeDays';
import WeatherToday from './WeatherToday/WeatherToday';
import WeatherDate from './WeatherDate/WeatherDate';
import WeatherCity from './WeatherCity/WeatherCity';
import Weather from './Weather';
import { connect } from 'react-redux';
import { getWeatherToday } from '../../../redux/weather-reducer';

class WeatherContainer extends Component {

  componentDidMount() {
    
    this.props.getWeatherToday('52.45', '30.98', 'en');
  }

  render() {
    // debugger;
    return <Weather {...this.props} />
  }

}

const mapStateToProps = (state) => ({
  place: state.weatherBlock.place,
  date: state.weatherBlock.date,
  time: state.weatherBlock.time,
  temperature: state.weatherBlock.temperature,
  descToday: state.weatherBlock.descToday,
})

export default connect(mapStateToProps, {getWeatherToday})(WeatherContainer);
