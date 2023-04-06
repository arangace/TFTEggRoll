import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/eggImage.module.scss";
import { EggProps } from "../types/Types";

interface EggImageProps extends EggProps {
  imageSize: { width: number; height: number };
}

const EggImage = ({ image, rarity, imageSize }: EggImageProps) => {
  const [imageSrc, setImageSrc] = useState("");
  const [raritySrc, setraritySrc] = useState("");
  useEffect(() => {
    setImageSrc(`/images/${image}`);
  }, [image]);
  useEffect(() => {
    setraritySrc(`/images/rarity-icons/${rarity}`);
  }, [rarity]);

  return (
    <div className={styles.container}>
      {imageSrc && (
        <Image
          className={styles.mainImage}
          alt="tft-egg-image"
          src={imageSrc}
          width={imageSize.width}
          height={imageSize.height}
        />
      )}
      {rarity !== "none" && raritySrc && (
        <Image
          className={styles.rarityImage}
          alt="egg-rarity"
          width={25}
          height={25}
          src={raritySrc}
        />
      )}
    </div>
  );
};

export default EggImage;
