import { Cloudy, Rain, Sunny } from './Icons'

export function HoursData() {
  return (
    <section className='bg-gray-700 flex justify-around items-center bg-opacity-50 mt-10 ml-6 mr-6 rounded-lg p-2 '>
      <div>
        <strong className='relative right-2 bottom-1'>12:00</strong>
        <Cloudy />
        <strong>32°</strong>
      </div>
      <div>
        <strong className='relative right-2 bottom-1'>15:00</strong>
        <Sunny size={24} />
        <strong>32°</strong>
      </div>
      <div>
        <strong className='relative right-2 bottom-1'>18:00</strong>
        <Sunny size={24} />
        <strong>32°</strong>
      </div>
      <div>
        <strong className='relative right-2 bottom-1'>21:00</strong>
        <Cloudy />
        <strong>15°</strong>
      </div>
      <div>
        <strong className='relative right-2 bottom-1'>00:00</strong>
        <Rain />
        <strong>15°</strong>
      </div>
    </section>
  )
}
