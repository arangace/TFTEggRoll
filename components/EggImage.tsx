import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/eggImage.module.scss";
import { EggProps } from "../types/Types";

const EggImage = ({ image, rarity }: EggProps) => {
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    setImageSrc(`/images/${image}`);
  }, [image]);

  return (
    <div className={styles.container}>
      <Image alt="tft-egg-image" src={imageSrc} width={200} height={175} />
      {/* <Image alt="egg-rarity" src={} /> */}
    </div>
  );
};

export default EggImage;
