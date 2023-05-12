
export const cordinatesCall = async (search) => {
  const geoCoding = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=05c14a2e252d41dd9f6f50d807421f30`

  try {
    const response = await fetch(geoCoding)
    const result = await response.json()

    const values = Object.values(result[0])
    const cordenates = values.filter(a => typeof a === 'number')
    const [lat, lon] = cordenates

    return { lat, lon }
  } catch (error) {
    console.error('Error', error)
  }
}
