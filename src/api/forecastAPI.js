import { instance } from "./api";

export const forecast = {
  async getForecast(latitude, longitude, lang) {
    const response = await instance.get(`${latitude},${longitude}?lang=${lang}`);
    // console.log(response.data);
    return response.data;
  }
}

export const getNameCity = async ( latitude, longitude, lang) => {
  const resp = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=71561645-4edf-4651-bd23-4fd153d55e69&geocode=${longitude},${latitude}&lang=${lang}`);
  const data = await resp.json();
  return data;
};
