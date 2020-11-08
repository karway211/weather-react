import { pictureAPI } from "../api/pictureAPI";
import { actionsAC } from "../redux/weather-reducer";
import { currentDay, currentMonth } from "../utils/CurrentTime-helper";

export const getLinkToImage = () => async (dispatch) => {
  const timeOfDay = currentDay();
  const timeOfYear = currentMonth();
  try {
    const data = await pictureAPI(timeOfYear, timeOfDay);
    console.log(data);
    await dispatch(actionsAC.setLinkToImage(data));
  } catch (err) {
    console.log(err);
    await dispatch(actionsAC.setNewErr('the limit on image requests has ended'));
  }
}
