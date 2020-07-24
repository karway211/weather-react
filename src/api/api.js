import Axios from "axios";

export const instance = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3ff58e19cb3a6ea2e8c4ab139884c8c7/'
})
