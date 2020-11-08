import { instance } from "./api";

export const forecast = {
  async getForecast(latitude, longitude, lang) {
    try {
      const response = await instance.get(`${latitude},${longitude}?lang=${lang}`);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }
}

export const getNameCity = async ( latitude, longitude, lang) => {
  try {
    const resp = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=71561645-4edf-4651-bd23-4fd153d55e69&geocode=${longitude},${latitude}&lang=${lang}`);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
