import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/gacha.module.scss";
import { EggObject, EggItem } from "../types/Types";
import Image from "next/image";
import Egg from "./Egg";
import { eggVarieties, defaultEgg } from "../constants/egg-variants";
import Results from "./Results";

type ProbabilityCalculationResultData =
  | { egg: EggObject; eggRarity: string }
  | undefined;

const Gacha = () => {
  const [egg, setEgg] = useState<EggItem>(defaultEgg);
  const [isRolling, setisRolling] = useState(false);
  const [start, setStart] = useState(true);
  const [showResults, setshowResults] = useState(false);
  const [resultData, setresultData] = useState<EggItem[]>([]);
  const rollsRef = useRef(0);
  const animationDuration = 2;
  const imageSize = { width: 300, height: 275 };

  const handleOnClickOpen = () => {
    setStart(false);

    let result = calculateResult(eggVarieties);
    if (result) {
      handleResultData(result);
    }

    setTimeout(() => {
      setisRolling(false);
      rollsRef.current += 1;
    }, animationDuration * 1000);
  };

  const handleOnClickResults = () => {
    setshowResults(!showResults);
  };

  const calculateResult = (
    eggRates: EggObject[]
  ): ProbabilityCalculationResultData => {
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

  const handleResultData = ({
    egg,
    eggRarity,
  }: {
    egg: EggItem;
    eggRarity: string;
  }) => {
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
    <section className={styles.container}>
      {!showResults ? (
        <>
          {start ? (
            <div className={styles.defaultEgg}>
              <Image
                alt="tft-egg-image"
                src={`/images/${defaultEgg.image}`}
                width={imageSize.width}
                height={imageSize.height}
                priority={true}
              />
            </div>
          ) : (
            <>
              <div className={styles.resultsButton}>
                <button
                  typeof="button"
                  role="Results button"
                  onClick={handleOnClickResults}
                  className={`${styles.buttonSecondary} ${styles.resultButton}`}
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
            typeof="button"
            role="Open egg button"
            onClick={handleOnClickOpen}
            disabled={isRolling}
            className={`${styles.button} ${
              isRolling ? styles.rollButtonDisabled : ""
            }`}
          >
            <span>Open</span>
          </button>
        </>
      ) : (
        <>
          <div className={styles.backButton}>
            <button
              role="Back button"
              typeof="button"
              onClick={handleOnClickResults}
              className={`${styles.buttonSecondary} ${styles.backButton}`}
            >
              <span>Back</span>
            </button>
          </div>

          <Results totalRolls={rollsRef.current} resultData={resultData} />
        </>
      )}
    </section>
  );
};

export default Gacha;
