export const unitsMapper = (key) => {
  let unit = "";
  switch (key) {
    case "temp":
    case "feels_like":
    case "temp_min":
    case "temp_max":
      unit = "Kelvin"
      break;
    case "pressure":
    case "sea_level":
    case "grnd_level":
      unit = "hPa"
      break;
    case "humidity":
      unit = "%"
      break;
    case "speed":
    case "gust":
      unit = "meter/sec"
      break;
    case "deg":
      unit = "°"
      break;
  }

  return unit
}

export const getTimeFormTimestamp = (timestamp) => {
  var date = new Date(timestamp);

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
