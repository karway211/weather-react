// import { instanceMaps } from "./api";

export const getCity = async (city, lang) => {

  // const response = await instanceMaps.get(`&geocode=${city}&lang=${lang}`);
  // const data = await response.json();
  // return data;

  // try {
      const baseUrl = 'https://geocode-maps.yandex.ru/1.x/';
      const clientAssKey = '?apikey=71561645-4edf-4651-bd23-4fd153d55e69&format=json';
      const cityString = `&geocode=${city}`;
      const langString = `&lang=${lang}`;
      const url = baseUrl + clientAssKey + cityString + langString;
      const response = await fetch(url);
      const data = await response.json();
      return data.response.GeoObjectCollection.featureMember[0].GeoObject.Point;
  // } catch (err) {
  //     alert('Sorry, unable to get city');
  // }
  // return null;
};