import { currentWeatherLogic } from '../logic/currentWeather'
import { nexDaysWeatherlogic } from '../logic/nextDaysWeatherLogic'

export async function currentWeather(lat, lon) {
  const currentWeaterCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05c14a2e252d41dd9f6f50d807421f30&units=metric`

  const response = await fetch(currentWeaterCall)
  const result = await response.json()

  const data = currentWeatherLogic({ result })
  console.log(data)

  return { data }
}

export async function nextDaysWeather(lat, lon) {
  const nexDaysWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=05c14a2e252d41dd9f6f50d807421f30&units=metric`

  const response = await fetch(nexDaysWeather)
  const result = await response.json()

  return { result }
}
