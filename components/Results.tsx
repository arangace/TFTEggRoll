import styles from "../styles/results.module.scss";
import EggImage from "./EggImage";
import { motion } from "framer-motion";

interface ResultsProps {
  totalRolls: number;
  resultData: {
    name: string;
    rarity: string;
    image: string;
  }[];
}

type ResultArray = {
  name: string;
  count: number;
  image: string;
  rarity: string;
}[];

type RarityCount = {
  rare: number;
  epic: number;
  legendary: number;
  ultimate: number;
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};
const Results = ({ resultData, totalRolls }: ResultsProps) => {
  const imageSize = { width: 100, height: 100 };
  const resultArray: ResultArray = [];
  const rarityResults: RarityCount = {
    rare: 0,
    epic: 0,
    legendary: 0,
    ultimate: 0,
  };

  resultData.forEach((result) => {
    const resultIndex = resultArray.findIndex(
      (resultArrayItem) => resultArrayItem.name === result.name
    );
    if (resultIndex !== -1) {
      resultArray[resultIndex].count++;
    } else {
      resultArray.push({
        name: result.name,
        count: 1,
        rarity: result.rarity,
        image: result.image,
      });
    }
  });

  resultData.forEach((result) => {
    if (result.rarity === "rare-icon.png") {
      rarityResults.rare += 1;
    } else if (result.rarity === "epic-icon.png") {
      rarityResults.epic += 1;
    } else if (result.rarity === "legendary-icon.png") {
      rarityResults.legendary += 1;
    } else if (result.rarity === "ultimate-icon.png") {
      rarityResults.ultimate += 1;
    }
  });

  return (
    <div className={styles.container}>
      <header className={styles.heading}>
        <h2 className={styles.headingTitle}>
          Total Eggs Hatched: {totalRolls}
        </h2>
        <h3 className={styles.headingResultsTitle}>Results: </h3>
        <h4 className={styles.rarityHeading}>
          Common: <span>{rarityResults.rare}</span>
        </h4>
        <h4 className={styles.rarityHeading}>
          Epic: <span>{rarityResults.epic}</span>
        </h4>
        <h4 className={styles.rarityHeading}>
          Legendary: <span>{rarityResults.legendary}</span>
        </h4>
        <h4 className={styles.rarityHeading}>
          Ultimate: <span>{rarityResults.ultimate}</span>
        </h4>
      </header>
      <section className={styles.eggResultsContainer}>
        {resultArray.map((result, index) => (
          <motion.div
            key={index}
            className={styles.result}
            initial={"hidden"}
            variants={fadeInVariants}
            whileInView="visible"
          >
            <EggImage
              rarity="none"
              image={result.image}
              imageSize={imageSize}
            />
            <span
              className={styles.resultName}
            >{`${result.name} x${result.count}`}</span>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Results;
