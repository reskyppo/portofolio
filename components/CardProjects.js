import React from "react";

const CardProjects = ({ title, type, desc, tech, link, github, img }) => {
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-12 md:py-24  mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={type}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded shadow-lg"
              src={img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {type}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <p className="leading-relaxed text-sm">{desc}</p>
              <p className="mt-4 leading-relaxed text-sm">
                this website is built using <b>{tech}</b>
              </p>
              <div className="flex my-4">
                <button className="flex  text-white bg-black border py-2 px-6 focus:outline-none hover:bg-white hover:text-black hover:border-black rounded">
                  <a href={link}>Demo</a>
                </button>
                <button className="flex ml-8 text-white bg-black border py-2 px-6 focus:outline-none hover:bg-white hover:text-black hover:border-black rounded">
                  <img
                    src="data:image/png;base64,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"
                    className="h-6 w-6 mr-2 "
                  />

                  <a href={github}>Github</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardProjects;
