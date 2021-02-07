import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-auto flex flex-col md:flex-row container md:mt-20">
          {/* <!--Left Col--> */}
          <div className="flex flex-col pb-4 w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl  font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
              Hi. My name is Resky!
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
              I'm a Frontend Developer, especially ReactJs and NextJs. But i can
              do some Backend stuff too!
            </p>
            {/* <div className="flex justify-center md:m-2">
              <button className="flex md:py-2 p-2 md:px-6 text-white font-semibold text-base  ring-4 ring-black ring-offset-4 rounded bg-black">
                <Link href="/projects">
                  <a className="text-xl md:text-2xl">My Projects</a>
                </Link>
              </button>
              <button className="flex md:py-2 p-2 md:px-6 ml-8 text-white font-semibold text-base  ring-4 ring-black ring-offset-4 rounded bg-black">
                <img
                  src="data:image/png;base64,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"
                  className="h-8 w-8 mr-2 "
                  alt="github"
                  width="100%"
                  height="100%"
                />
                <a
                  className="text-xl md:text-2xl"
                  href="https://github.com/reskyppo/"
                >
                  Github
                </a>
              </button>
            </div> */}
          </div>

          {/* <!--Right Col--> */}
          <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
            <img className="mx-auto lg:mr-0 " src="/hero.webp" alt="hero" />
          </div>
        </div>
        <div>
          <section className="rounded-full animate-bounce border-black border-8 h-72 w-72 md:h-80 md:w-80 absolute left-0 -inset-y-1/4 -ml-28 "></section>
          <section className="rounded-full animate-bounce border-black border-8 h-80 w-80 md:h-96 md:w-96 absolute left-0 -inset-y-1/4 -ml-36  "></section>
        </div>
      </div>
    </>
  );
};

export default Hero;
