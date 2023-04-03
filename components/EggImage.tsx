import React, { useEffect, useState } from "react";
import Image from "next/image";
type EggImageProps = {
  eggImage: string;
};
const EggImage = ({ eggImage }: EggImageProps) => {
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    setImageSrc(`/images/${eggImage}`);
  }, [eggImage]);

  return (
    <div>
      <Image alt="tft-egg-image" src={imageSrc} width={200} height={175} />
    </div>
  );
};

export default EggImage;
