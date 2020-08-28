
import { forecast } from "../api/forecastAPI";
import { actionsAC } from "../redux/weather-reducer";
// import { actionsThreeDay } from "../redux/threeDaysWeather-reducer";

export const getWeatherInit = (latitude, longitude, lang) => {
  return async (dispatch) => {
    
    const data = await forecast.getForecast(latitude, longitude, lang);
    console.log(data.currently);
    dispatch(actionsAC.setWeatherForToday(data.currently));
    dispatch(actionsAC.setWeatherForThreeDays(data.daily, lang));
    dispatch(actionsAC.setTime(data.timezone, lang));
    // dispatch(actionsThreeDay.setWeatherForThreeDays(data.daily.data));
    
    // console.log(data.currently);
    // console.log(data.daily.data);
  }
}
