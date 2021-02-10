import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <>
      <div className="h-screen mx-auto flex justify-center items-center flex-col md:flex-row container ">
        {/* <!--Left Col--> */}
        <div className="flex flex-col pb-4 w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h2 className="md:mb-3 text-secondary text-3xl md:text-4xl  font-semibold leading-tight text-center md:text-left slide-in-bottom-h1">
            Hi, I am
          </h2>
          <h1 className="md:mb-3 text-primary text-3xl md:text-5xl  font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Resky Budi
          </h1>
          <h3 className="md:mb-3 text-secondary text-3xl md:text-4xl  font-semibold leading-tight text-center md:text-left slide-in-bottom-h1">
            Frontend Developer
          </h3>
          <p className="text-secondary leading-normal text-sm md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            I code with Vue Js, React Js and NextJs. <br />I can also do some
            Backend stuff!
          </p>
          <div className="flex justify-center">
            <Link href="/projects">
              <button className="focus:outline-none border-2 rounded-lg w-32 h-12 text-xl bg-none text-secondary border-secondary hover:bg-secondary hover:text-bg">
                Projects
              </button>
            </Link>
            <Link href="https://github.com/reskyppo">
              <button className="ml-4 md:ml-16 focus:outline-none  bg-secondary border-2 rounded-lg w-32 h-12 text-xl text-bg border-secondary hover:bg-bg hover:text-secondary">
                Github
              </button>
            </Link>
          </div>
        </div>

        {/* <!--Right Col--> */}
        <div className="w-full lg:w-3/5 py-6 overflow-y-hidden">
          <img className="mx-auto lg:mr-0 " src="/Hero.webp" alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
