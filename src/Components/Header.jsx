export function Header() {
  return (
    <header className='h-1/4 w-screen flex justify-center items-center'>
      <div>
        <form>
        <input
          className='p-1 rounded-lg w-60 border-2 border-black text-white placeholder-gray-400 bg-opacity-95 bg-gray-100 md:text-black md:w-80'
          type='text'
          placeholder='Argentina, Brasil'
          />
          </form>
      </div>
    </header>
  )
}
