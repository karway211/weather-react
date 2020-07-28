import { getNameCity } from "../api/forecastAPI";
import { actionsAC } from "../redux/weather-reducer";

export const getPlace = (latitude, longitude, lang) => {
  return async (dispatch) => {
    
    const data = await getNameCity(latitude, longitude, lang);
    if(data.response.GeoObjectCollection.featureMember[0]) {
      const currentCity = data.response.GeoObjectCollection.featureMember[0].GeoObject.description;
      dispatch(actionsAC.setPlace(currentCity));
    }
  }
}