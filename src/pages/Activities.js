import React from "react";
import "../styles/Activities.css";

const Activities = () => {
  return (
    <div className="activities">
      <div className="activitiesTitle">
        <h2>Activities at Major's Camp</h2>
      </div>
      <ol>
        <li>
          Army Themed Games: (Treasure Hunt, Leadership game, Team Spirit,
          Battlefieldwar games etc (Included)
        </li>
        <li>Boat Ride with Floating Snacks (Optional)</li>
        <li>Cycling (Optional)</li>
        <li>ATV (Optional)</li>
        <li>Army Themed Photo Zone (Included)</li>
        <li>Barbeque your food (Included)</li>
        <li>Crop Tour (Included)</li>
        <li>Site Seeing on Jeep (Optional)</li>
        <li>Pluck your own Vegetable and get it cooked by us.(Optional)</li>
        <li>Light & Sound Show</li>
        <li>Army Themed Museum(Included)</li>
        <li>Dress like a Soldier (Optional)</li>
        <li>AMAR Jyoti</li>
      </ol>
      <div className="activitiesButtons">
        <div className="bookNowButton">
          <a href="/tents">
            <button style={{ width: "100px", height: "50px" }}>Book Now</button>
          </a>
        </div>
        <div className="photosButton">
          <a href="/">
            <button style={{ width: "100px", height: "50px" }}>
              Click for Photos
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Activities;
