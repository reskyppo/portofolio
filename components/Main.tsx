import CardSkills from "./CardSkills";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <div className="p-12 flex flex-col items-center">
      <div className="rounded-full h-48 w-48 bg-white border-4 border-black">
        <img src="/me.png" className="rounded-full w-full h-full" />
      </div>
      <h1 className="text-3xl font-semibold mt-4 mb-2">Resky Budi Nugroho</h1>
      <h5 className="text-gray-600 text-lg">
        Frontend Engineer at Privy Identitas Digital
      </h5>
      <div className="flex justify-center items-center mt-4 py-2 px-4">
        <SocialMedia
          url="mailto:reskybeen@gmail.com"
          tooltip="reskybeen@gmail.com"
          src="/icons/gmail.svg"
        />
        <SocialMedia
          url="https://github.com/reskyppo"
          tooltip="github.com/reskyppo"
          src="/icons/github.svg"
        />
        <SocialMedia
          url="https://leetcode.com/reskyyy"
          tooltip="leetcode.com/reskyyy"
          src="/icons/leetcode.svg"
        />
        <SocialMedia
          url="https://medium.com/@reskyppo"
          tooltip="medium.com/@reskyppo"
          src="/icons/medium.svg"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="p-4 grid grid-cols-2 lg:grid-cols-5">
        <CardSkills skill="Next Js" />
      </div>
    </>
  );
};

const Main = () => {
  return (
    <div className="w-screen">
      <div className="w-2/3 mx-auto">
        <Header />
        <Skills />
      </div>
    </div>
  );
};

export default Main;
