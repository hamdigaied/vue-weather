import axios from "axios"

export const getWeather = (country) => {
  let apiKey = process.env.VUE_APP_WEATHER_API_KEY;
  return axios
    .get(`${process.env.VUE_APP_WEATHER_API_URL}?q=${country}&appid=${apiKey}`);
}
