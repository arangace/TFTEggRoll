import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/gacha.module.scss";
import { EggObject, EggProps } from "../types/Types";
import Image from "next/image";
import Egg from "./Egg";
import { eggVarieties, defaultEgg } from "../constants/egg-variants";
import Results from "./Results";

type ResultData = {
  name: string;
  rarity: string;
  image: string;
};

const Gacha = () => {
  const [egg, setEgg] = useState<EggProps>(defaultEgg);
  const [isRolling, setisRolling] = useState(false);
  const [start, setStart] = useState(true);
  const [showResults, setshowResults] = useState(false);
  const [resultData, setresultData] = useState<ResultData[]>([]);
  const rollsRef = useRef(0);
  const animationDuration = 2;
  const imageSize = { width: 300, height: 275 };

  const handleOnClickOpen = () => {
    setStart(false);
    handleResultData(calculateResult(eggVarieties));

    setTimeout(() => {
      setisRolling(false);
      rollsRef.current += 1;
    }, animationDuration * 1000);
  };

  const handleOnClickResults = () => {
    setshowResults(!showResults);
  };
  const calculateResult = (eggRates: EggObject[]) => {
    const roll = Math.random();
    let cumulativeProbability = 0;
    let eggRarity = "";

    for (let i = 0; i < eggRates.length; i++) {
      cumulativeProbability += eggRates[i].rate;
      if (roll < cumulativeProbability) {
        if (eggRates[i].rarity === "") {
          // calculate rarity and set rarity if there isn't a defined rarity
          eggRarity = calculateRarity();
        } else {
          // if there's a rarity, set rarity as the eggs rarity
          eggRarity = eggRates[i].rarity;
        }
        return { egg: eggRates[i], eggRarity };
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

  const handleResultData = ({ egg, eggRarity }: any) => {
    setisRolling(true);
    setEgg({ image: egg.image, rarity: eggRarity, name: egg.name });
    setTimeout(() => {
      setresultData((prevResultData) => {
        const newResultData = [
          ...prevResultData,
          { name: egg.name, rarity: eggRarity, image: egg.image },
        ];
        return newResultData;
      });
    }, animationDuration * 1000);
  };

  return (
    <div className={styles.container}>
      {!showResults ? (
        <>
          {start ? (
            <div className={styles.defaultEgg}>
              <Image
                alt="tft-egg-image"
                src={`/images/${defaultEgg.image}`}
                width={imageSize.width}
                height={imageSize.height}
              />
            </div>
          ) : (
            <>
              <div className={styles.resultsButton}>
                <button
                  onClick={handleOnClickResults}
                  className={`${styles.buttonSecondary}`}
                >
                  <span>Results</span>
                </button>
              </div>
              <Egg
                imageSize={imageSize}
                isRolling={isRolling}
                egg={egg}
                animationDuration={animationDuration}
              />
            </>
          )}
          <button
            onClick={handleOnClickOpen}
            disabled={isRolling}
            className={`${styles.button} ${
              isRolling ? styles.rollButtonDisabled : ""
            }`}
          >
            Open
          </button>
        </>
      ) : (
        <>
          <div className={styles.backButton}>
            <button
              onClick={handleOnClickResults}
              className={`${styles.buttonSecondary}`}
            >
              <span>Back</span>
            </button>
          </div>

          <Results totalRolls={rollsRef.current} resultData={resultData} />
        </>
      )}
    </div>
  );
};

export default Gacha;
