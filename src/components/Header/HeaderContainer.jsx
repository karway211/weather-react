import './Header.scss';
import { connect } from 'react-redux';
import Header from './Header';
import { actionsAC } from '../../redux/weather-reducer';
import { getCityData } from '../../thunk/getCityData';

const mapStateToProps = state => ({
  сelsius: state.weatherBlock.сelsius,
  currentlyWeather: state.weatherBlock.currentlyWeather,
  threeDays: state.weatherBlock.threeDays,
  lang: state.weatherBlock.lang,
});

export default connect(mapStateToProps, {getCityData, ...actionsAC})(Header);
