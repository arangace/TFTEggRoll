import React, { useEffect, useState } from "react";

type rollResult = any;
interface EggRollProps {
  clickRoll: boolean;
}

const EggRoll = ({ clickRoll }: EggRollProps) => {
  const [rollResult, setrollResult] = useState<rollResult>();

  const roll = () => {
    const grandPrize = 0.02;
    const roll = Math.random();
    if (roll <= grandPrize) {
      setrollResult(true);
    }
  };
  useEffect(() => {
    console.log("rolling..");
    if (clickRoll) {
      roll();
    }
  }, [clickRoll]);

  return (
    <div>
      <h2>EggRoll</h2>
      <div>{rollResult}</div>
    </div>
  );
};

export default EggRoll;
