import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/eggImage.module.scss";
import { EggProps } from "../types/Types";

const EggImage = ({ image, rarity }: EggProps) => {
  const [imageSrc, setImageSrc] = useState("");
  const [raritySrc, setraritySrc] = useState("");
  useEffect(() => {
    setImageSrc(`/images/${image}`);
    setraritySrc(`/images/${rarity}`);
  }, [image]);

  return (
    <div className={styles.container}>
      {imageSrc && (
        <Image
          className={styles.mainImage}
          alt="tft-egg-image"
          src={imageSrc}
          width={200}
          height={175}
        />
      )}
      {rarity && (
        <Image
          className={styles.rarityImage}
          alt="egg-rarity"
          width={50}
          height={50}
          src={raritySrc}
        />
      )}
    </div>
  );
};

export default EggImage;
