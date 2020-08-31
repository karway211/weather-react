
import { forecast } from "../api/forecastAPI";
import { actionsAC } from "../redux/weather-reducer";

export const getWeatherInit = (latitude, longitude, lang) => {
  return async (dispatch) => {
    
    const data = await forecast.getForecast(latitude, longitude, lang);
    // console.log(data.timezone);
    dispatch(actionsAC.setWeatherForToday(data.currently));
    dispatch(actionsAC.setWeatherForThreeDays(data.daily, lang, data.timezone));
    dispatch(actionsAC.setTime(data.timezone, lang));
  }
}
