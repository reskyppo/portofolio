import React from "react";

const Hero = () => {
  return (
    <div className="container pt-24 md:pt-8 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/* <!--Left Col--> */}
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Hi. My name is Resky!
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          I'm a Frontend Developer, especially ReactJs and NextJs. But i can do
          some Backend stuff too!
        </p>
      </div>

      {/* <!--Right Col--> */}
      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
        <img
          className="w-3/6 h-1/6 mx-auto lg:mr-0 slide-in-bottom"
          src="/hero.svg"
        />
      </div>
    </div>
  );
};

export default Hero;
