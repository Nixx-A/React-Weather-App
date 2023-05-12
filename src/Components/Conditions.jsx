export function Conditions({ condition, type, value, max }) {
  return (
    <article className='mr-4'>
      <label htmlFor='wind'>{condition}</label>
      <p className='font-bold'>{type}</p>
      <progress id={condition} value={value} max={max} className='h-1 w-1/2' />
    </article>
  )
}
