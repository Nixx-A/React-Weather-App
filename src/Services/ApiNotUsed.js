/* eslint-disable no-unused-vars */
// The Api that i was using for free now it's for price so i had to change to another one
// I'll left the code here just because i don't wanna delete it :(

const ApiNotUsed = async (search) => {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${search}&days=3`
  console.log(url)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '987f751709mshbba56ecc9aa8eeap1d21d9jsneef7236c4a4a',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.error('Error', error)
  }
}
