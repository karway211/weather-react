
import { forecast } from "../api/forecastAPI";
import { actionsAC } from "../redux/weather-reducer";
import { actionsThreeDay } from "../redux/threeDaysWeather-reducer";

export const getWeatherInit = (latitude, longitude, lang) => {
  return async (dispatch) => {
    
    const data = await forecast.getForecast(latitude, longitude, lang);
    dispatch(actionsAC.setWeatherForToday(data.currently));
    dispatch(actionsThreeDay.setWeatherForThreeDays(data.daily));
    dispatch(actionsAC.setTime(data.timezone, lang));
    
    // console.log(data.currently);
    // console.log(data.daily.data);
  }
}
