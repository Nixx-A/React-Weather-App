import { useState } from 'react'
import { cordinatesCall } from '../Services/cordinates'
import { currentWeather, nextDaysWeather } from '../Services/callWeatherData'

export function useWeatherData() {
  const [weatherCurrent, setWeatherCurrent] = useState()
  const [loading, setLoading] = useState(false)
  const [isData, setIsData] = useState(false)
  const [error, setError] = useState(false)

  const getWeather = async (search) => {
    try {
      setLoading(true)
      const newCordinates = await cordinatesCall(search)
      const { lat, lon } = newCordinates
      const newWeatherCurrent = await currentWeather(lat, lon)
      setWeatherCurrent(newWeatherCurrent)
      console.log(weatherCurrent)
      nextDaysWeather(lat, lon)
      setIsData(true)
    } catch (e) {
      setError(true)
      throw new Error(e)
    } finally {
      setLoading(false)
    }
  }

  return { weatherCurrent, loading, getWeather, isData, error }
}
