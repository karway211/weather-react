import { getCity } from "../api/mapsAPI";
import { actionsAC } from "../redux/weather-reducer";

export const getCityData = (city, lang) => {
  return async (dispatch) => {
    
    const data = await getCity(city, lang);
    let {pos} = data;
    console.log(pos);
    console.log(pos.split(' '));
    const positions = pos.split(' ');
    const [longitude, latitude] = positions;
    console.log(data);
    dispatch(actionsAC.setCity(city));
    dispatch(actionsAC.setLocation(+latitude, +longitude));
  }
}