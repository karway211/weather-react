import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import weatherReducer from "./weather-reducer";

const reducers = combineReducers({
  weatherBlock: weatherReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
