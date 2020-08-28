// let initialState = {
//   dataTomorrow: {
//     day: 'Monday',
//     temperature: '20',
//     icon: 'cloudy',
//   },
//   dataAfterTomorrow: {
//     day: 'Tuesday',
//     temperature: '20',
//     icon: 'cloudy',
//   },
//   dataDayAfterTomorrow: {
//     day: 'Wednesday',
//     temperature: '20',
//     icon: 'cloudy',
//   }
// }

// const weatherThreeDayReducer = (state = initialState, action) => {
  
//   switch( action.type ) {
//     case 'SET_WEATHER_FOR_THREE_DAYS':{
//       let data = [];
//       action.threeDays.data.forEach((el, i) => {
        
//         if (i>0 && i<4 ) data = [...data, el]
        
//         return data
//       });
//       const [tomorrow, afterTomorrow, dayAfterTomorrow] = data;
//       console.log(tomorrow);
//       console.log(afterTomorrow);
//       console.log(dayAfterTomorrow);
//       const getWeekDay = (time, lang) => {
//         const date = new Date(+time*1000);
//         const options = { weekday: 'long'};
//         return date.toLocaleString(`${lang}-${lang.toUpperCase()}`, options);
//       }
//       const [tomorrowWeekDay, afterTomorrowWeekDay, dayAfterTomorrowWeekDay] = [getWeekDay(tomorrow.time, action.lang)
//         , getWeekDay(afterTomorrow.time, action.lang), getWeekDay(dayAfterTomorrow.time, action.lang)];
//       const getCelsius = (data) => Math.round((((data.temperatureMax + data.temperatureMin) / 2 - 32) * 5) / 9);
//       return {
//         ...state,
//         dataTomorrow: {
//           ...state.dataTomorrow,
//           temperature: getCelsius(tomorrow),
//           icon: tomorrow.icon,
//           day: tomorrowWeekDay,
//         },
//         dataAfterTomorrow: {
//           ...state.dataAfterTomorrow,
//           temperature: getCelsius(afterTomorrow),
//           icon: afterTomorrow.icon,
//           day: afterTomorrowWeekDay,
//         },
//         dataDayAfterTomorrow: {
//           ...state.dataDayAfterTomorrow,
//           temperature: getCelsius(dayAfterTomorrow),
//           icon: dayAfterTomorrow.icon,
//           day: dayAfterTomorrowWeekDay,
//         },
//       }
//     }
//     default:{
//       return state
//     }
//   }
// }

// export const actionsThreeDay = {
//   setWeatherForThreeDays: (threeDays, lang) => ({type: 'SET_WEATHER_FOR_THREE_DAYS', threeDays, lang}),
// }

// export default weatherThreeDayReducer;
