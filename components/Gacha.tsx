import React from "react";
import styles from "../styles/gacha.module.scss";

const Gacha = () => {
  return (
    <div className={styles.container}>
      Gacha
      <button className={styles.rollButton}>Open</button>
    </div>
  );
};

export default Gacha;
