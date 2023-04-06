import React from "react";
import { EggProps } from "../types/Types";
import EggImage from "./EggImage";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/egg.module.scss";
interface isRollingProp {
  isRolling: boolean;
  egg: EggProps;
  animationDuration: number;
  imageSize: { width: number; height: number };
}

const Egg = ({
  isRolling,
  egg,
  animationDuration,
  imageSize,
}: isRollingProp) => {
  const rockingVariants = {
    start: { rotate: [0, -45, 45, 0] },
    end: { rotate: 0 },
  };
  const resultVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "block" },
  };
  return (
    <div className={styles.eggContainer}>
      {isRolling && egg ? (
        <motion.div
          variants={rockingVariants}
          animate={isRolling ? "start" : "end"}
          transition={{ duration: animationDuration, ease: "easeInOut" }}
          className={styles.eggImageContainer}
        >
          <Image
            alt="tft-random-egg-image"
            src={"/images/tft-egg-refined.png"}
            width={imageSize.width}
            height={imageSize.height}
            priority={true}
            className={styles.eggImage}
          />
        </motion.div>
      ) : (
        ""
      )}
      <motion.div
        initial={"hidden"}
        variants={resultVariants}
        animate={isRolling ? "hidden" : "visible"}
      >
        <EggImage imageSize={imageSize} image={egg.image} rarity={egg.rarity} />
      </motion.div>

      <div className={styles.titleContainer}>
        {!isRolling && egg ? (
          <h3 className={styles.eggName}>{egg.name}</h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Egg;
