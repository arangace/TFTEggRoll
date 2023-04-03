import React, { useState } from "react";
import styles from "../styles/gacha.module.scss";
import EggImage from "./EggImage";
import { motion } from "framer-motion";
import Image from "next/image";

type rollResult = any;
const Gacha = () => {
  const [rollResult, setrollResult] = useState<rollResult>();
  const [bestPrizeWon, setbestPrizeWon] = useState(false);
  const [eggImage, seteggImage] = useState("zed-cache.png");
  const [isRocking, setIsRocking] = useState(false);
  const [isRolling, setisRolling] = useState(false);
  const animationDuration = 2;

  const variants = {
    start: { rotate: [0, -30, 30, 0] },
    end: { rotate: 0 },
  };

  const handleOnClick = () => {
    roll();
    setIsRocking(true);
    setTimeout(() => {
      setIsRocking(false);
    }, animationDuration * 1000);
  };

  const roll = () => {
    if (bestPrizeWon) {
      setbestPrizeWon(false);
      seteggImage("zed-cache.png");
    }
    seteggImage("tft-egg-refined.png");
    const grandPrize = 0.2;
    const roll = Math.random();
    setrollResult(roll.toFixed(2));
    if (roll <= grandPrize) {
      setbestPrizeWon(true);
      seteggImage("project-zed.webp");
    }
  };
  return (
    <div className={styles.container}>
      {isRocking ? (
        <motion.div
          variants={variants}
          animate={isRocking ? "start" : "end"}
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
        <EggImage eggImage={eggImage} />
      )}

      <div>roll: {rollResult}</div>
      <div>{bestPrizeWon ? "You Won" : "Keep trying!"}</div>
      <button onClick={handleOnClick} className={styles.rollButton}>
        Open
      </button>
    </div>
  );
};

export default Gacha;
