import { useState } from "react"
import employerData from '../api/employerData.json';

const Experience = () => {
  const [active, setActive] = useState('pixel8')
  const buttons = [
    {
      name: "Pixel8 llc",
      value: "pixel8"
    },
    {
      name: "Niveus Solutions",
      value: "niveus"
    },
    {
      name: "PrivJs",
      value: "priv"
    },
    {
      name: "Practiskills",
      value: "practiskills"
    }
  ]

  return (
    <>
      <h2 className="text-lg font-light text-black dark:text-white uppercase">Experience</h2>

      <div className="block lg:hidden w-full">
        {
          employerData.map((item, index) => (
            <>
              <div className="lg:px-6 w-full my-10" key={item.id + index}>
                <div className="flex w-full justify-between items-center mb-2">
                  <div className="font-light text-base md:text-xl lg:text-2xl text-black dark:text-white">
                    {item.role}
                  </div>
                  <div className="font-light text-gray-500 text-xs md:text-sm lg:text-base">{item.active_period}</div>
                </div>
                <a href={item.link} target="_black" className='text-sm text-blue-500 cursor-pointer'>{item.company}</a>
                <ul className="text-gray-700 dark:text-gray-400 text-xs md:text-sm mt-2 lg:text-bas">
                  {
                    item.responsibility.map((resp, index) => (
                      <li className="mb-1" key={index}>{resp}</li>
                    ))
                  }
                </ul>
              </div>
            </>
          ))
        }
      </div>

      <div className="hidden lg:flex mt-12 ">
        <div className="flex flex-col text-black dark:text-white">
          {
            buttons.map(items => (
              <button key={items.value} className={`px-14 py-3 -ml-px 
              ${active === items.value ?
                  'bg-gray-200 dark:bg-gray-900 border-l border-black dark:border-white' :
                  'bg-white dark:bg-black border-l border-gray-500'} 
              text-left whitespace-nowrap`}
                onClick={() => { setActive(items.value) }}
              >
                {items.name}
              </button>
            ))
          }
        </div>
        {
          employerData.map((item, index) => (
            <>
              {
                item.id === active ?
                  <div className="lg:px-6 w-full" key={item.id + index}>
                    <div className="flex w-full justify-between items-center mb-4">
                      <div className="font-light text-base md:text-xl lg:text-2xl text-black dark:text-white">
                        {item.role}
                      </div>
                      <div className="font-light text-gray-500 text-xs md:text-sm lg:text-base">{item.active_period}</div>
                    </div>
                    <a href={item.link} target="_black" className='text-sm text-blue-500 cursor-pointer'>{item.company}</a>
                    <ul className="text-gray-700 dark:text-gray-400 text-xs md:text-sm mt-4 lg:text-bas">
                      {
                        item.responsibility.map((resp, index) => (
                          <li className="mb-2" key={index}>{resp}</li>
                        ))
                      }
                    </ul>
                  </div> : null
              }
            </>
          ))
        }
      </div>
    </>
  )
}

export default Experience