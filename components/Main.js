// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "./Footer";

const Main = () => {
  return (
    <main>
      <div className="leading-normal tracking-normal">
        {/* <Navbar /> */}
        <Hero />

        <Card />
        <Footer />
      </div>
    </main>
  );
};

export default Main;
