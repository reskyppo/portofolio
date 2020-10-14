import Link from "next/link";

const Contact = ({ src, alt, link }) => {
  return (
    <Link href={link}>
      <a className="m-2">
        <img className="h-8 w-8" src={src} alt={alt} />
      </a>
    </Link>
  );
};

export default Contact;
