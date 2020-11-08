import Axios from "axios";

export const instance = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3ff58e19cb3a6ea2e8c4ab139884c8c7/'
})

export const instanceMaps = Axios.create({
  baseURL: 'https://geocode-maps.yandex.ru/1.x/?apikey=71561645-4edf-4651-bd23-4fd153d55e69&format=json'
});

export const instancePicture = Axios.create({
  baseURL: 'https://api.unsplash.com/photos/random'
});
