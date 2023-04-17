import React from "react";
import { EggItem } from "../types/Types";
import EggImage from "./EggImage";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/egg.module.scss";
import {
  rockingVariants,
  resultVariants,
  resultTitleVariants,
} from "../utils/motion";

type isRollingProp = {
  isRolling: boolean;
  egg: EggItem;
  animationDuration: number;
  imageSize: { width: number; height: number };
};

const Egg = ({
  isRolling,
  egg,
  animationDuration,
  imageSize,
}: isRollingProp) => {
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
      ) : null}
      <motion.div
        initial={"hidden"}
        variants={resultVariants}
        animate={isRolling ? "hidden" : "visible"}
      >
        <EggImage imageSize={imageSize} image={egg.image} rarity={egg.rarity} />
      </motion.div>

      <div className={styles.titleContainer}>
        {!isRolling && egg ? (
          <motion.h3
            initial={"hidden"}
            variants={resultTitleVariants}
            animate={isRolling ? "hidden" : "visible"}
            className={styles.eggName}
          >
            {egg.name}
          </motion.h3>
        ) : null}
      </div>
    </div>
  );
};

export default Egg;
