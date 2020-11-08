import { getCity } from "../api/mapsAPI";
import { actionsAC } from "../redux/weather-reducer";

export const getCityData = (city, lang) => {
  return async (dispatch) => {
    try {
      const data = await getCity(city, lang);
      let {pos} = data;
      const positions = pos.split(' ');
      const [longitude, latitude] = positions;
      dispatch(actionsAC.setCity(city));
      dispatch(actionsAC.setLocation(+latitude, +longitude));
    } catch (err) {
      dispatch(actionsAC.setNewErr(err.message));
    }
  }
}
