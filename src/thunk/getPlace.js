import { getNameCity } from "../api/forecastAPI";
import { actionsAC } from "../redux/weather-reducer";

export const getPlace = (latitude, longitude, lang) => {
  return async (dispatch) => {
    
    const data = await getNameCity(latitude, longitude, lang);
    if(data.response.GeoObjectCollection.featureMember[0]) {
      let currentCity = '';
      data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.forEach(el => {
        if(el.kind === 'locality' || el.kind === 'country') {
          currentCity = `${currentCity} ${el.name}`
        }
      })
      currentCity = currentCity.split(' ').reverse().join(' ');
      dispatch(actionsAC.setPlace(currentCity));
    }
  }
}