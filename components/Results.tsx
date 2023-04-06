import styles from "../styles/results.module.scss";

interface ResultsProps {
  resultData: {
    name: string;
    rarity: string;
  }[];
}

const Results = ({ resultData }: ResultsProps) => {
  return <div className={styles.container}>Results</div>;
};

export default Results;
