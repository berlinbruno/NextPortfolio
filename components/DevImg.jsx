
import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc, imgStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        className={`${imgStyles}`}
        priority
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..."
        src={imgSrc}
        width={450}
        height={450}
        alt=""
      />
    </div>
  );
};

export default DevImg;
