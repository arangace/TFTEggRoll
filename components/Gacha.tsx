import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/gacha.module.scss";
import { EggObject, EggProps } from "../types/Types";
import Image from "next/image";
import Egg from "./Egg";
import { eggRates } from "../constants/egg-variants";

const Gacha = () => {
  let defaultEgg = { image: "zed-cache.png", rarity: "", name: "" };
  const animationDuration = 2;

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
