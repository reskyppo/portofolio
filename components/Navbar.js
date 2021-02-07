import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full container mx-auto py-6 md:px-16">
      <div className="w-full flex flex-col md:flex-row items-center ">
        <div>
          <Link href="/">
            <img
              src="/logo.png"
              alt="logo"
              className="w-16 h-16 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-end content-center">
          <Link href="/projects">
            <a className="inline-block font-semibold text-2xl hover:cursor-pointer text-gray-600 hover:text-gray-800 text-center h-10 p-2 md:h-auto md:p-4 ">
              Projects
            </a>
          </Link>
          <Link href="https://github.com/reskyppo/">
            <a className="inline-block font-semibold text-2xl hover:cursor-pointer text-gray-600 hover:text-gray-800 text-center h-10 p-2 md:h-auto md:p-4 ">
              Github
            </a>
          </Link>
          {/* <a
            className="text-xl md:text-2xl"
            href="https://github.com/reskyppo/"
          >
            Github
          </a> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
