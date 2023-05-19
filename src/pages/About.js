import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div>
        <h3>1.The entire Major's Camp is spread in 100 Acres.</h3>
        <h3>
          2. The entire premises is Army Themed and each spot at Major's Camp
          narrates a warrior's / Army Story.
        </h3>
        <h3>3. It is surrounded by 400 acres of nature and greenery.</h3>
        <h3>4. Beautiful Mountain View</h3>
        <h3>5. River View along side</h3>
        <h3>
          6. Crop Vegetation of fruits & Vegetables (apple, mango, guava,
          papaya, watermelon, muskmelon, dragon fruit, banana, strawberry,
          grapes, potato, tomato, onion, cucumber, radish, carrot, brinjal and
          so much more)
        </h3>
        <h3>7. Trekking Track, Cycling Track</h3>
        <h3>8. All tents are camouflaged</h3>
        <h3>9. Barbeque Area</h3>
        <h3>10. Briefing Area for Team Games</h3>
        <h3>11. Dinning Area</h3>
        <h3>12..AMAR Jyoti</h3>
        <h3>13. PET Friendly</h3>
      </div>
      <div className="buttons">
        <div className="activitiesButton">
          <a href="/activities">
            <button style={{ width: "100px", height: "50px" }}>
              Activities at our Premises
            </button>
          </a>
        </div>
        <div className="picturesButton">
          <a href="/gallery">
            <button style={{ width: "100px", height: "50px" }}>
              Pictures of Premises
            </button>
          </a>
        </div>
        <div className="bookNowButton">
          <a href="/tents">
            <button style={{ width: "100px", height: "50px" }}>Book Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
