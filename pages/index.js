import { useTheme } from "next-themes";
import Head from "next/head";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";

export default function Home() {
  const { theme, setTheme } = useTheme("dark");
  return (
    <div>
      <Head>
        <title>Vijeth K </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-inter">
        <div className="bg-white dark:bg-black">
          <div className="px-4 md:px-16 lg:px-24 pb-10 max-w-6xl mx-auto ">
            <Navbar setTheme={setTheme} theme={theme} />
            <Hero />
          </div>
          <div className="px-4 md:px-16 lg:px-24 pb-10 pt-14 md:pt-20 lg:pt-32 max-w-6xl mx-auto">
            <Experience />
          </div>
        </div>
      </main>
    </div>
  );
}
