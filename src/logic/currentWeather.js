/* eslint-disable camelcase */
export function currentWeatherLogic({ result }) {
  console.log(result)
  const { main, name, sys, wind, weather } = result
  const { humidity, temp, feels_like } = main
  const { sunrise, sunset } = sys
  const dateSunrise = new Date(sunrise * 1000).getHours()
  const dateSunset = new Date(sunset * 1000).getHours()
  const roundTemp = Math.round(temp)
  const currentDate = new Date()
  const formattedDate = currentDate.toDateString()

  return {
    name,
    date: formattedDate,
    country: sys.country,
    description: weather[0].main,
    humidity,
    sunrise: dateSunrise,
    sunset: dateSunset,
    temperature: roundTemp,
    feelsLike: feels_like,
    wind: wind.speed
  }
}
