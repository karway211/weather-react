import { forecast } from "../api/forecastAPI";

let initialState = {
  place: {
    city: 'Gomel',
    country: 'Belarus',
  },
  date: {
    weekday: 'Mon',
    day: '23',
    month: 'july',
  },
  time: {
    hour: '22',
    minutes: '34'
  },
  temperature: '20',
  descToday: {
    icon: '',
    summary: 'MOSTLY CLOUDY',
    feelsLike: '19',
    wind: '4',
    humidity: '60',
  }
}

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_WEATHER_FOR_TODAY':
      debugger;
      return {
        ...state,
        temperature: Math.round(((action.currently.temperature - 32) * 5) / 9),
        descToday: {icon: action.currently.icon,
                    summary: action.currently.summary, 
                    feelsLike: Math.round(((action.currently.apparentTemperature - 32) * 5) / 9),
                    wind: Math.round((action.currently.windSpeed * 1000)/3600),
                    humidity: `${+action.currently.humidity * 100}`,
        }

                    
        
      }
    default:
      return state;
  }
}

const actions = {
  setWeatherForToday: (currently) => ({type: 'SET_WEATHER_FOR_TODAY', currently}),
}

export const getWeatherToday = (latitude, longitude, lang) => {
  
  return async (dispatch) => {
    const data = await forecast.getForecast(latitude, longitude, lang);
    dispatch(actions.setWeatherForToday(data.currently));
    // debugger;
    console.log(data.currently);
  }
}

export default weatherReducer;
