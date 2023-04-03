import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/gacha.module.scss";

import Image from "next/image";
import { EggProps } from "../types/Types";
import Egg from "./Egg";

interface EggObject {
  name: string;
  rate: number;
  image: string;
  rarity: string;
}

const Gacha = () => {
  let defaultEgg = { image: "zed-cache.png", rarity: "", name: "" };
  const animationDuration = 2;
  const eggRates: EggObject[] = [
    {
      name: "Zed",
      rate: 0.25,
      image: "project-zed.webp",
      rarity: "ultimate-icon.png",
    },
    {
      name: "Bun Bun",
      rate: 0.25,
      image: "bunbun-egg.webp",
      rarity: "epic-icon.png",
    },
    {
      name: "Bungo",
      rate: 0.25,
      image: "bungo-egg.webp",
      rarity: "epic-icon.png",
    },
    {
      name: "Dango Rango",
      rate: 0.25,
      image: "dango-rango-egg.webp",
      rarity: "legendary-icon.png",
    },
  ];

  const [egg, setEgg] = useState<EggProps>(defaultEgg);
  const [isRolling, setisRolling] = useState(false);
  const [start, setStart] = useState(true);
  const rollsRef = useRef(0);

  const handleOnClick = () => {
    setStart(false);
    handleResultData(calculateResult(eggRates));

    setTimeout(() => {
      setisRolling(false);
      rollsRef.current += 1;
    }, animationDuration * 1000);
  };

  const calculateResult = (eggRates: EggObject[]) => {
    const roll = Math.random();
    let cumulativeProbability = 0;

    for (let i = 0; i < eggRates.length; i++) {
      cumulativeProbability += eggRates[i].rate;
      if (roll < cumulativeProbability) {
        return eggRates[i];
      }
    }
  };

  const handleResultData = (result: any) => {
    setisRolling(true);
    setEgg({ image: result.image, rarity: result.rarity, name: result.name });
  };

  return (
    <div className={styles.container}>
      {start ? (
        <Image
          alt="tft-egg-image"
          src={`/images/${defaultEgg.image}`}
          width={200}
          height={175}
        />
      ) : (
        <Egg
          isRolling={isRolling}
          egg={egg}
          animationDuration={animationDuration}
        />
      )}

      <button
        onClick={handleOnClick}
        disabled={isRolling}
        className={`${styles.rollButton} ${
          isRolling ? styles.rollButtonDisabled : ""
        }`}
      >
        Open
      </button>
    </div>
  );
};

export default Gacha;
