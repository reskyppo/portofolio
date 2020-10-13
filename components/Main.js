import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="leading-normal tracking-normal text-gray-900">
          <div
            className="h-screen pb-14 bg-right bg-cover"
            style={{ backgroundImage: "url(" + "/bg.svg" + ")" }}
          >
            <Navbar />
            <Hero />

            <Card />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
