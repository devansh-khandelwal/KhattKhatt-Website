import React from "react";
import "./StcikyButton.css";
import img from "../../assets/logo/logo4.png";

const StickyButton = () => {
  return (
    <div>
      <a href="/tents" className="stickyButton">
        <img src={img} alt="my_image" />
      </a>
    </div>
  );
};

export default StickyButton;
