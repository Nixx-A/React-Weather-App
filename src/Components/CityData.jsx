import { Conditions } from './Conditions'
import { NextDaysWeather } from './NextDaysWeather'

export function CityData({ data }) {
  const short = data?.data

  if (!data) return

  return (
    <>
      <div className='flex h-1/6 flex-col justify-center ml-6 mb-8 text-black md:text-white'>
        <h1 className='text-4xl'>
          <p>
            <strong>{short?.name}</strong>, <strong>{short?.country}</strong>
          </p>
        </h1>
        <p className='text-sm font-semibold'>{short?.date}</p>
      </div>
      <section className='grid grid-cols-2 ml-6 mt-6 justify-items-center items-center md:flex flex-row'>
        <div className='hidden md:block mr-2 p-1 w-3'>{}</div>
        <div className=' p-6 '>
          <h2 className='text-7xl font-semibold'>{short?.temperature}°</h2>
          <p className='ml-6 text-lg font-medium text-center mt-2'>
            {short?.description}
          </p>
        </div>
        <div className='ml-4 p-1.5 mr-6 bg-gray-700 rounded-lg bg-opacity-50 text-center md:flex md:items-center md:w-10/12 md:justify-around md:h-28'>
          <Conditions
            condition={'Wind'}
            type={short?.wind + ' km/h'}
            value={short?.wind}
            max={15}
          />
          <Conditions
            condition={'Humidity'}
            type={short?.humidity + '%'}
            value={short?.humidity}
            max={100}
          />
        </div>
        {/* <NextDaysWeather />
        <NextDaysWeather /> */}
      </section>
    </>
  )
}
