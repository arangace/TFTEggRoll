import React, { useState } from "react";
import styles from "../styles/gacha.module.scss";
import EggImage from "./EggImage";
import { motion } from "framer-motion";
import Image from "next/image";
import { EggProps } from "../types/Types";

type rollResult = any;

interface EggObject {
  name: string;
  rate: number;
  image: string;
  rarity: string;
}

const Gacha = () => {
  const [rollResult, setrollResult] = useState<rollResult>();
  const [bestPrizeWon, setbestPrizeWon] = useState(false);
  let defaultEgg = { image: "zed-cache.png", rarity: "", name: "zed cache" };
  const [egg, setEgg] = useState<EggProps>(defaultEgg);
  const [isRolling, setisRolling] = useState(false);
  const animationDuration = 2;

  const eggRates: EggObject[] = [
    {
      name: "Zed",
      rate: 0.5,
      image: "project-zed.webp",
      rarity: "ultimate-icon.png",
    },
    {
      name: "Bun Bun",
      rate: 0.5,
      image: "bunbun-egg.webp",
      rarity: "epic-icon.png",
    },
  ];
  const variants = {
    start: { rotate: [0, -30, 30, 0] },
    end: { rotate: 0 },
  };

  const handleOnClick = () => {
    handleResultData(calculateResult(eggRates));

    setTimeout(() => {
      setisRolling(false);
    }, animationDuration * 1000);
  };
  function calculateResult(eggRates: EggObject[]) {
    const roll = Math.random();
    let cumulativeProbability = 0;

    for (let i = 0; i < eggRates.length; i++) {
      cumulativeProbability += eggRates[i].rate;
      if (roll < cumulativeProbability) {
        return eggRates[i];
      }
    }
  }
  const handleResultData = (result: any) => {
    console.log(result);
    setisRolling(true);
    setEgg({ image: result.image, rarity: result.rarity, name: result.name });
  };

  return (
    <div className={styles.container}>
      {isRolling ? (
        <motion.div
          variants={variants}
          animate={isRolling ? "start" : "end"}
          transition={{ duration: animationDuration, ease: "easeInOut" }}
          className={styles.eggImageContainer}
        >
          <Image
            alt="tft-random-egg-image"
            src={"/images/tft-egg-refined.png"}
            width={200}
            height={175}
            priority={true}
            className={styles.eggImage}
          />
        </motion.div>
      ) : (
        <EggImage image={egg.image} rarity={"none"} name="zed cache" />
      )}
      <h3>Result is: {!isRolling && <span>{egg.name}</span>}</h3>
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
