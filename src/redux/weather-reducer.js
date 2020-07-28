let initialState = {
  place: 'Gomel, Belarus',
  location: {
    latitude: '',
    longitude: '',
  },
  lang: 'en',
  timezone: '',
  time: '',
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
      // debugger;
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
    case 'SET_LOCATION':
      console.log(action.latitude)
      console.log(action.longitude)
      return {
        ...state,
        location: {
          latitude: action.latitude,
          longitude: action.longitude,
        }
      }
    case 'SET_PLACE':
      return {
        ...state,
        place: action.place,
      }
    case 'SET_TIME':
      let date = new Date();
      let options = { weekday: 'short', month: 'long', day: 'numeric', hour:"2-digit", minute:"2-digit", hour12: false, timeZone: action.timezone };
      // console.log(date.toLocaleString(`${action.lang}-${action.lang.toUpperCase()}`, options));
      return {
        ...state,
        time: date.toLocaleString(`${action.lang}-${action.lang.toUpperCase()}`, options),
        timezone: action.timezone,
      }
    default:
      return state;
  }
}

export const actionsAC = {
  setWeatherForToday: (currently) => ({type: 'SET_WEATHER_FOR_TODAY', currently}),
  setLocation: (latitude, longitude) => ({type: 'SET_LOCATION', latitude, longitude}),
  setPlace: (place) => ({type: 'SET_PLACE', place}),
  setTime: (timezone, lang) => ({type: 'SET_TIME', timezone, lang}),
}

export default weatherReducer;
