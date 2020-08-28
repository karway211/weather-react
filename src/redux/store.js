import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import weatherReducer from "./weather-reducer";
// import weatherThreeDayReducer from "./threeDaysWeather-reducer";

const reducers = combineReducers({
  weatherBlock: weatherReducer,
  // weatherThreeDayBlock: weatherThreeDayReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleWare));


window.store = store;
export default store;
