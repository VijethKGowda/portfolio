import { ClipboardDocumentIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

const Hero = () => {
  const [copy, setCopy] = useState(false)

  const copyToClipboard = (text) => {
    setCopy(true)
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <div className='py-14 md:py-24 lg:py-36 space-y-6 lg:space-y-8'>
        <div className='font-light text-sm md:text-sm lg:text-base text-gray-800 dark:text-slate-200'>Hey, I’m</div>
        <h1 className='font-medium py-2 text-4xl md:text-6xl lg:text-8xl main-text'>
          Vijeth K Gowda
        </h1>
        <p className='font-light text-sm md:text-base lg:text-lg text-gray-800 dark:text-slate-200'>
          I&apos;m a Front-End Developer based in Mangalore, India.
          I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
          I can build responsive web applications using ReactJs, Redux, TailwindCSS and Javascript. I also work on NextJs for SSR applications and little bit of React native for mobile.
          I&apos;ve manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div onMouseLeave={() => { setTimeout(() => { setCopy(false) }, 1500) }} className="flex gap-0.5 justify-between bg-gradient-to-tr from-[#9358F7] via-[#4A9FEB] to-[#10D7E2] p-0.5 rounded-md">
          <a href="mailto:vijethkgowda@gmail.com" className="py-3 w-full text-center bg-white dark:bg-black rounded-md">
            {/* <EnvelopeIcon className="w-5" /> */}
            Send an email
          </a>
          <div className="tooltip" data-tip={copy ? "Copied" : "Copy"}>
            <button onClick={() => { copyToClipboard("vijethkgowda@gmail.com") }} className="btn bg-white dark:bg-black flex items-center justify-center rounded-md px-3">
              <ClipboardDocumentIcon className="w-5" />
            </button>
          </div>
        </div>
        <a href='https://www.linkedin.com/in/vijeth-k-476539152/' target="_blank" className="bg-gradient-to-tr from-[#6964DE] via-[#4A9FEB] to-[#FCA6E9] p-0.5 rounded-md" rel="noreferrer">
          <div className="py-3 w-full text-center bg-white dark:bg-black rounded-md">
            LinkedIn
          </div>
        </a>
        <a href='https://twitter.com/vijethkgowda' target="_blank" className="bg-gradient-to-tr from-[#F4426C] to-[#FBF2B1] p-0.5 rounded-md" rel="noreferrer">
          <div className="py-3 w-full text-center bg-white dark:bg-black rounded-md">
            Twitter
          </div>
        </a>
        <a href='https://github.com/VijethKGowda' target="_blank" className="bg-gradient-to-tr from-[#D24074] via-[#4A9FEB] to-[#6518B4] p-0.5 rounded-md" rel="noreferrer">
          <div className="py-3 w-full text-center bg-white dark:bg-black rounded-md">
            Github
          </div>
        </a>
      </div>
    </>
  )
}

export default Hero