import React from "react";
import Gacha from "./Gacha";
import styles from "../styles/interface.module.scss";

const Interface = () => {
  return (
    <div className={styles.container}>
      <Gacha />
    </div>
  );
};

export default Interface;
