// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "./Footer";

const Main = () => {
  return (
    <main>
      <div className="leading-normal tracking-normal">
        <div
          className="h-screen pb-14 bg-right bg-cover"
          style={{ backgroundImage: "url(" + "/bg.svg" + ")" }}
        >
          <Hero />

          <Card />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
