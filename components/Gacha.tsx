import React, { useState } from "react";
import styles from "../styles/gacha.module.scss";
import EggRoll from "./EggRoll";
import EggImage from "./EggImage";
type rollResult = any;
const Gacha = () => {
  const handleOnClick = () => {
    roll();
  };
  const [rollResult, setrollResult] = useState<rollResult>();
  const [bestPrizeWon, setbestPrizeWon] = useState(false);
  const [eggImage, seteggImage] = useState("zed-cache.png");

  const roll = () => {
    if (bestPrizeWon) {
      setbestPrizeWon(false);
      seteggImage("zed-cache.png");
    }
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
      <EggImage eggImage={eggImage} />

      <div>roll: {rollResult}</div>
      <div>{bestPrizeWon ? "You Won" : "Keep trying!"}</div>
      <button onClick={handleOnClick} className={styles.rollButton}>
        Open
      </button>
    </div>
  );
};

export default Gacha;
