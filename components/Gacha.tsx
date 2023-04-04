import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/gacha.module.scss";
import { EggObject, EggProps } from "../types/Types";
import Image from "next/image";
import Egg from "./Egg";
import { eggVarieties, defaultEgg } from "../constants/egg-variants";

const Gacha = () => {
  const [egg, setEgg] = useState<EggProps>(defaultEgg);
  const [isRolling, setisRolling] = useState(false);
  const [start, setStart] = useState(true);
  const [rarity, setrarity] = useState("");
  const rollsRef = useRef(0);
  const animationDuration = 2;

  const handleOnClick = () => {
    setStart(false);
    handleResultData(calculateResult(eggVarieties));

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
        if (eggRates[i].rarity === "") {
          // calculate rarity and set rarity if there isn't a defined rarity
          const eggRarity = calculateRarity();
          setrarity(eggRarity);
          return eggRates[i];
        } else {
          // if there's a rarity, set rarity as the eggs rarity
          setrarity(eggRates[i].rarity);
          return eggRates[i];
        }
      }
    }
  };

  const calculateRarity = () => {
    const roll = Math.random();
    if (roll <= 0.05) {
      return "legendary-icon.png";
    } else if (roll <= 0.2) {
      return "epic-icon.png";
    } else {
      return "rare-icon.png";
    }
  };

  const handleResultData = (result: any) => {
    setisRolling(true);
    setEgg({ image: result.image, rarity: rarity, name: result.name });
  };

  return (
    <div className={styles.container}>
      {start ? (
        <div className={styles.defaultEgg}>
          <Image
            alt="tft-egg-image"
            src={`/images/${defaultEgg.image}`}
            width={200}
            height={175}
          />
        </div>
      ) : (
        <Egg
          isRolling={isRolling}
          egg={egg}
          rarity={rarity}
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
