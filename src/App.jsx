/* eslint-disable react/no-unescaped-entities */
import './App.css'
import { CityData } from './Components/CityData'
import { HoursData } from './Components/HoursData'
import { useWeatherData } from './hooks/useWeatherData'

function App() {
  const { weatherCurrent, loading, getWeather, isData, error } =
    useWeatherData()

  const handleSubmit = e => {
    e.preventDefault()
    const field = new FormData(e.target)
    const query = field.get('query')
    getWeather(query)
  }

  return (
    <main className='bg-gray-9 md:text-white'>
      <div className='w-screen h-screen bg-sky bg-no-repeat bg-cover opacity-80 md:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black md:opacity-100 '>
        <header className='h-1/4 w-screen flex justify-center items-center'>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                name='query'
                className='p-1 rounded-lg w-60 border-2 border-black text-black placeholder-gray-400 bg-opacity-95 bg-gray-100 md:text-black md:w-80'
                type='text'
                placeholder='Paris, Venecia'
              />
            </form>
          </div>
        </header>
        {loading
          ? (
          <p className='text-center'>Loading...</p>
            )
          : (
          <CityData data={weatherCurrent} />
            )}
      </div>
    </main>
  )
}

export default App
