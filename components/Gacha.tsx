import React, { useState } from "react";
import styles from "../styles/gacha.module.scss";
import EggImage from "./EggImage";
import { motion } from "framer-motion";
import Image from "next/image";
import { EggProps } from "../types/Types";

type rollResult = any;

const Gacha = () => {
  const [rollResult, setrollResult] = useState<rollResult>();
  const [bestPrizeWon, setbestPrizeWon] = useState(false);
  let defaultEgg = { image: "zed-cache.png", rarity: "common" };
  const [egg, setEgg] = useState<EggProps>(defaultEgg);
  const [isRolling, setisRolling] = useState(false);
  const animationDuration = 2;

  const variants = {
    start: { rotate: [0, -30, 30, 0] },
    end: { rotate: 0 },
  };

  const handleOnClick = () => {
    roll();
    setisRolling(true);
    setTimeout(() => {
      setisRolling(false);
    }, animationDuration * 1000);
  };

  const roll = () => {
    if (bestPrizeWon) {
      setbestPrizeWon(false);
      setEgg(defaultEgg);
    }
    const grandPrize = 0.2;
    const roll = Math.random();
    setrollResult(roll.toFixed(2));
    if (roll <= grandPrize) {
      setbestPrizeWon(true);
      setEgg({ image: "project-zed.webp", rarity: "ultimate" });
    }
  };
  return (
    <div className={styles.container}>
      {isRolling ? (
        <motion.div
          variants={variants}
          animate={isRolling ? "start" : "end"}
          transition={{ duration: animationDuration, ease: "easeInOut" }}
        >
          <Image
            alt="tft-random-egg-image"
            src={"/images/tft-egg.webp"}
            width={200}
            height={175}
          />
        </motion.div>
      ) : (
        <EggImage image={egg.image} rarity={egg.rarity} />
      )}

      <div>roll: {rollResult}</div>
      <div>{bestPrizeWon ? "You Won" : "Keep trying!"}</div>
      <button
        onClick={handleOnClick}
        disabled={isRolling}
        className={styles.rollButton}
      >
        Open
      </button>
    </div>
  );
};

export default Gacha;
