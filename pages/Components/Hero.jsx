import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import styles from "./style.module/Button.module.css";

const Hero = () => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = (text) => {
    setCopy(true);
    navigator.clipboard.writeText(text);
  };

  // https://grantsdashboard.stacks.org/

  return (
    <>
      <div className="">
        <div className="pt-14 md:pt-20 lg:pt-24 space-y-6 lg:space-y-8">
          <div className="font-light text-sm md:text-sm lg:text-base text-gray-800 dark:text-slate-200">
            Hey, I’m
          </div>
          <h1 className="font-medium py-2 text-4xl md:text-6xl lg:text-8xl main-text">
            Vijeth K
          </h1>
          <p className="font-light text-sm md:text-base lg:text-lg text-gray-800 dark:text-slate-200">
            I&apos;m a Front-End Developer based in Mangalore, India. I enjoy
            creating things that live on the internet, whether that be websites,
            applications, or anything in between. I can build responsive web
            applications using ReactJs, Redux, TailwindCSS and Javascript. I
            also work on NextJs for SSR applications and little bit of React
            native for mobile. I&apos;ve manage to gain a good amount of
            experience and valuable knowledge from all different kinds of
            situations throughout my projects/work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-black dark:text-white">
          <div
            onMouseLeave={() => {
              setTimeout(() => {
                setCopy(false);
              }, 1500);
            }}
            className={`relative ${styles.glow} flex gap-0.5 justify-between p-1 rounded-md`}
          >
            <a
              href="mailto:vijethkgowda@gmail.com"
              className="py-3 w-full z-10 text-center bg-white dark:bg-black rounded-md"
            >
              {/* <EnvelopeIcon className="w-5" /> */}
              Send an email
            </a>
            <div
              className="tooltip z-10"
              data-tip={copy ? "Copied" : "Copy Email"}
            >
              <button
                aria-label="clipboard"
                onClick={() => {
                  copyToClipboard("vijethkgowda@gmail.com");
                }}
                className="bg-white h-full dark:bg-black border-none flex items-center justify-center hover:bg-white hover:dark:bg-black rounded-md px-3"
              >
                <ClipboardDocumentIcon className="w-5 text-black dark:text-white" />
              </button>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/vijeth-k-476539152/"
            target="_blank"
            className={`relative ${styles.glow} p-1 rounded-md`}
            rel="noreferrer"
          >
            <div className="py-3 w-full relative text-center bg-white dark:bg-black rounded-md z-10">
              LinkedIn
            </div>
          </a>
          <a
            href="https://twitter.com/vijethkgowda"
            target="_blank"
            className={`relative ${styles.glow} p-1 rounded-md`}
            rel="noreferrer"
          >
            <div className="py-3 w-full relative text-center bg-white dark:bg-black rounded-md z-10">
              Twitter
            </div>
          </a>
          <a
            href="https://github.com/VijethKGowda"
            target="_blank"
            className={`relative ${styles.glow} p-1 rounded-md`}
            rel="noreferrer"
          >
            <div className="py-3 w-full text-center relative bg-white dark:bg-black rounded-md z-10">
              Github
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
