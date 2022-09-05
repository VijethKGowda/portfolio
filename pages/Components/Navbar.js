import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const Navbar = ({ setTheme, theme }) => {

  return (
    <>
      <div className='flex justify-between text-gray-800 dark:text-slate-200 py-6 md:py-9 lg:py-11'>
        <div className='font-light text-2xl'>VJ<sup>th</sup></div>
        <div className='flex gap-4 md:gap-6 lg:gap-8 items-center sm:text-sm md:text-base lg:text-lg'>
          <button className='font-light'>Resume</button>
          <a className='cursor-pointer font-light'>Contact</a>
          {
            theme === 'light' ?
              <button onClick={() => { setTheme('dark') }} className=''>
                <MoonIcon className='text-gray-700 w-6' />
              </button> :
              <button onClick={() => { setTheme('light') }} className=''>
                <SunIcon className='text-orange-300 w-7' />
              </button>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar