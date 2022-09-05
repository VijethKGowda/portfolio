import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const Navbar = ({ setTheme, theme }) => {

  return (
    <>
      <div className='flex justify-between text-gray-800 dark:text-slate-200 py-6 md:py-9 lg:py-11'>
        <div className='font-light text-2xl'>VJ<sup>th</sup></div>
        <div className='flex gap-4 md:gap-6 lg:gap-8 items-center sm:text-sm md:text-base lg:text-lg'>
          <a href='https://docs.google.com/document/d/1AglclbhNABpTcusWhRZ6M0AgVQNROTS8u6nOKkG7ws4/edit?usp=sharing' target="_blank" className='font-light' rel="noreferrer">Resume</a>
          {/* <a className='cursor-pointer font-light'>Contact</a> */}
          {
            theme === 'light' ?
              <button aria-label="moon" onClick={() => { setTheme('dark') }} className=''>
                <MoonIcon className='text-gray-700 w-6' />
              </button> :
              <button aria-label="sun" onClick={() => { setTheme('light') }} className=''>
                <SunIcon className='text-orange-300 w-7' />
              </button>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar