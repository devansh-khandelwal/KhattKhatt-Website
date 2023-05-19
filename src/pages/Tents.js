import React from "react";
import "../styles/Tents.css";
import FirstCard from "../components/tents_card/FirstCard";
import SecondCard from "../components/tents_card/SecondCard";
import ThirdCard from "../components/tents_card/ThirdCard";
import FourthCard from "../components/tents_card/FourthCard";

const Tents = () => {
  return (
    <div className="cards">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
    </div>
  );
};

export default Tents;
