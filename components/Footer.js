import Link from "next/link";
import Contact from "./Contact";
const Footer = () => {
  return (
    <div className=" mx-auto mt-32">
      <h1 className="leading-normal text-2xl md:text-3xl text-dodger-blue-700 font-semibold mb-4 text-center">
        Have an exciting project <br /> where you need some help?
      </h1>
      <p className="leading-relaxed text-lg md:text-xl  font-medium text-center">
        Send me over a message, and let's discussing together!
      </p>
      <div className="flex flex-row mx-auto py-2 justify-center items-center">
        <Contact
          link="https://www.instagram.com/reskybn/"
          src="data:image/png;base64,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"
          alt="Instagram"
        />

        <Contact
          link="https://www.linkedin.com/in/resky-budi-nugroho-a394681a9/"
          src="data:image/png;base64,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"
          alt="LinkedIn"
        />

        <Contact
          link="https://twitter.com/icekybears"
          src="data:image/png;base64,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"
          alt="Twitter"
        />

        <Contact
          link="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=I+Have+Exicited+Project+For+You&to=Reskybeen@gmail.com&body=Hi+Resky,+I+have+something+to+discuss+with+you"
          src="data:image/png;base64,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"
          alt="Gmail"
        />
      </div>

      <div className="text-gray-700 text-xs font-medium text-center">
        <p>
          Special thanks to
          <Link href="https://www.drawkit.io/">
            <a className="text-dodger-blue-800 font-semibold"> Drawkit </a>
          </Link>
          and
          <Link href="https://icons8.com/">
            <a className="text-dodger-blue-800 font-semibold"> Icons8 </a>
          </Link>
        </p>

        <p className="my-2">
          Made with <span className="text-pastel-pink-500">&hearts; </span> by
          Reskyppo!
        </p>
      </div>
    </div>
  );
};

export default Footer;
