import { currentWeather } from '../Services/callWeatherData'
import { Sunny } from './Icons'

export function NextDaysWeather() {
  return (
    <div className='hidden p-1.5 mr-6 bg-gray-700 rounded-lg bg-opacity-50 text-center md:flex w-8/12 justify-around '>
      <article className=''>
        <h1>Tuesday</h1>
        <sub className='mr-2'>min 15°</sub>
        <sub>max 33°</sub>
        <div className='relative left-6'>
          <Sunny size={36} color='#fff' />
        </div>
        <p>Sunny</p>
      </article>
    </div>
  )
}
