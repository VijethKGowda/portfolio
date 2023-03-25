import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import earth from "../public/earth.jpg";
import Navbar from "./Components/Navbar";
import { useEffect, useMemo, useRef, useState } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

export default function Home() {
  const { theme, setTheme } = useTheme("dark");
  // const [presentScreen, setPresentScreen] = useState("screen1");
  const screen1 = useRef(null);
  const screen2 = useRef(null);
  const screen3 = useRef(null);
  let s1 = useOnScreen(screen1, "-300px");
  let s2 = useOnScreen(screen2, "-300px");
  let s3 = useOnScreen(screen3, "-300px");

  let position = useMemo(() => {
    if (s1 && !s2 && !s3) return { right: "0", top: "40%", rotate: "-45deg" };
    else if (!s1 && s2 && !s3)
      return { right: "-1500px", top: "-100px", rotate: "-90deg" };
    else if (!s1 && !s2 && s3)
      return { right: "0", top: "40%", rotate: "-45deg" };
  }, [s1, s2, s3]);

  console.log("haha", s1, s2, s3, position);

  return (
    <div>
      <Head>
        <title>Vijeth K </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-inter">
        <div className="bg-black relative max-h-screen overflow-y-scroll snap-y snap-mandatory">
          <div
            className="absolute translate-y-1/4 -rotate-90"
            // style={{ right: "0", top: "40%", rotate: "-45deg" }}
          >
            <Image
              src={earth}
              alt="Picture of the author"
              width={3000}
              height={3000}
            />
          </div>

          <div
            ref={screen1}
            className="px-4 md:px-16 lg:px-24 max-w-6xl mx-auto h-screen snap-start"
          >
            <Navbar setTheme={setTheme} theme={theme} />
          </div>
          <div ref={screen2} className="h-screen bg-slate-500 snap-start"></div>
          <div ref={screen3} className="h-screen bg-lime-400 snap-start"></div>
        </div>
      </main>
    </div>
  );
}
