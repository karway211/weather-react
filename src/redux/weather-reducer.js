let initialState = {
  place: 'Gomel, Belarus',
  location: {
    latitude: '',
    longitude: '',
  },
  currentlyWeather: {},
  threeDays: {},
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
  },
  сelsius : true,
  weatherThreeDay: {
    dataTomorrow: {
      day: 'Monday',
      temperature: '20',
      icon: 'cloudy',
    },
    dataAfterTomorrow: {
      day: 'Tuesday',
      temperature: '20',
      icon: 'cloudy',
    },
    dataDayAfterTomorrow: {
      day: 'Wednesday',
      temperature: '20',
      icon: 'cloudy',
    }
  }
}

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_WEATHER_FOR_TODAY':
      // debugger;
      return {
        ...state,
        currentlyWeather: action.currently,
        temperature: state.сelsius ? Math.round(((action.currently.temperature - 32) * 5) / 9): Math.round(action.currently.temperature),
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
    case 'SET_LANG':
      return {
        ...state,
        lang: action.lang,
      }
    case 'SET_CELSIUS':
      return {
        ...state,
        сelsius: action.isVal,
      }
    case 'SET_TIME':
      let date = new Date();
      let options = { weekday: 'short', month: 'long', day: 'numeric', hour:"2-digit", minute:"2-digit", hour12: false, timeZone: action.timezone };
      // console.log(date.toLocaleString(`${action.lang}-${action.lang.toUpperCase()}`, options));
      return {
        ...state,
        time: date.toLocaleString(`${action.lang}-${action.lang === 'en' ? 'US': action.lang.toUpperCase()}`, options),
        timezone: action.timezone,
      }
      case 'SET_WEATHER_FOR_THREE_DAYS':
        let data = [];
        action.threeDays.data.forEach((el, i) => {
          
          if (i>0 && i<4 ) data = [...data, el]
          
          return data
        });
        const [tomorrow, afterTomorrow, dayAfterTomorrow] = data;
        console.log(tomorrow);
        console.log(afterTomorrow);
        console.log(dayAfterTomorrow);
        const getWeekDay = (time, lang) => {
          const date = new Date(+time*1000);
          const options = { weekday: 'long'};
          return date.toLocaleString(`${lang}-${lang.toUpperCase()}`, options);
        }
        const [tomorrowWeekDay, afterTomorrowWeekDay, dayAfterTomorrowWeekDay] = [getWeekDay(tomorrow.time, action.lang)
          , getWeekDay(afterTomorrow.time, action.lang), getWeekDay(dayAfterTomorrow.time, action.lang)];
        const getCelsius = (data) => state.сelsius 
          ? Math.round((((data.temperatureMax + data.temperatureMin) / 2 - 32) * 5) / 9) 
          : Math.round((data.temperatureMax + data.temperatureMin) / 2);
        return {
          ...state,
          threeDays: action.threeDays,
          weatherThreeDay: {
            dataTomorrow: {
              ...state.dataTomorrow,
              temperature: getCelsius(tomorrow),
              icon: tomorrow.icon,
              day: tomorrowWeekDay,
            },
            dataAfterTomorrow: {
              ...state.dataAfterTomorrow,
              temperature: getCelsius(afterTomorrow),
              icon: afterTomorrow.icon,
              day: afterTomorrowWeekDay,
            },
            dataDayAfterTomorrow: {
              ...state.dataDayAfterTomorrow,
              temperature: getCelsius(dayAfterTomorrow),
              icon: dayAfterTomorrow.icon,
              day: dayAfterTomorrowWeekDay,
            },
          },
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
  setLang: (lang) => ({type: 'SET_LANG', lang}),
  setCelsius: (isVal) => ({type: 'SET_CELSIUS', isVal}),
  setWeatherForThreeDays: (threeDays, lang) => ({type: 'SET_WEATHER_FOR_THREE_DAYS', threeDays, lang}),
}

export default weatherReducer;
