import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <div className="w-screen p-12 flex flex-col items-center">
      <div className="rounded-full h-48 w-48 bg-white border border-gray-400">
        <img src="/me.png" className="rounded-full w-full h-full" />
      </div>
      <h1 className="text-3xl font-semibold mt-4">Resky Budi Nugroho</h1>
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

const Main = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Main;
