import CardProjects from "../components/CardProjects";
import Footer from "../components/Footer";

const projects = () => {
  return (
    <>
      <header>
        <title>Projects</title>
      </header>
      <main>
        <CardProjects
          type="website"
          title="My Notes"
          desc="This website is used to record activities that will be carried
                  out so you don't forget."
          tech="ReactJs, Redux, and Firebase"
          link="https://mynotesjs.netlify.app/"
          github="https://github.com/reskyppo/ReactJs-My-Notes"
          img="/images/notes.png"
        />

        <CardProjects
          type="website"
          title="Wikia Ghibli"
          desc="This website can provide you with all things Ghibli information"
          tech="ReactJs, Axios, and Tailwindcss"
          link="https://www.wikighibli.site/"
          github="https://github.com/reskyppo/ReactJs-ghibli-wikia"
          img="/images/wikia.png"
        />

        <CardProjects
          type="website"
          title="Personal Website"
          desc="This website is about me and posting my portfolio"
          tech="NextJs and Tailwindcss"
          link="https://reskyppo.vercel.app/"
          github="https://github.com/reskyppo/portofolio"
          img="/images/portofolio.png"
        />

        <CardProjects
          type="website"
          title="Fuzzy Logic Calculator"
          desc="This website helps you to calculate fuzzy logic easily"
          tech="NextJs and Tailwindcss"
          link="https://fuzlogcalc.vercel.app/"
          github="https://github.com/reskyppo/FuzzyLogic_Calculator"
          img="/images/Fuzzy.png"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default projects;
