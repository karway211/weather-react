import { instance } from "./api";

// const darkskyAPI = {
//   getWeatherData = async (latitude, longitude, lang) => {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     let data;
//     try {
//         const response = await fetch(`${proxyUrl}https://api.darksky.net/forecast/3ff58e19cb3a6ea2e8c4ab139884c8c7/${latitude},${longitude}?lang=${lang}`);
//         data = await response.json();
//         return data;
//     } catch (err) {
//         console.log('Sorry, unable to get the current Weather');
//     }
//     return data;
//   }
// }

export const forecast = {
  async getForecast(latitude, longitude, lang) {
    const response = await instance.get(`${latitude},${longitude}?lang=${lang}`);
    return response.data;
  }
}