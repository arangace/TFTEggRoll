import React from "react";
import { EggProps } from "../types/Types";
import EggImage from "./EggImage";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/eggImage.module.scss";
interface isRollingProp {
  isRolling: boolean;
  egg: EggProps;
  animationDuration: number;
}

const Egg = ({ isRolling, egg, animationDuration }: isRollingProp) => {
  const variants = {
    start: { rotate: [0, -45, 45, 0] },
    end: { rotate: 0 },
  };
  return (
    <React.Fragment>
      {isRolling && egg ? (
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
        <EggImage image={egg.image} rarity={egg.rarity} />
      )}
      {!isRolling && egg ? (
        <h3>
          Result is: <span>{egg.name}</span>
        </h3>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Egg;
