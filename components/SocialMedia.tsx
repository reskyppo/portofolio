import Image from "next/image";
import ReactTooltip from "react-tooltip";

type Props = {
  src: string;
  url: string;
  tooltip: string;
};

const SocialMedia = ({ src, url, tooltip }: Props) => {
  return (
    <div className="my-1 mx-2 cursor-pointer" data-tip={tooltip}>
      <a href={url} target="_blank">
        <Image src={src} alt={tooltip} height={30} width={30} />
      </a>
      <ReactTooltip place="top" type="info" effect="solid" />
    </div>
  );
};

export default SocialMedia;
