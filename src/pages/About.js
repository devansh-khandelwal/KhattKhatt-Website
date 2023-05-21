import React from "react";
import "../styles/About.css";
import img from "../assets/img1.jpeg";
import firstParaImg from "../assets/img2.jpeg";

const firstPara =
  "Major's Camp is spread in 100 Acres.The entire premises is Army themed and each spot at Major's Camp narrates a warrior's / Army's story." +
  "It is surrounded by 400 acres of nature and greenery. It has a beautiful mountain view alongside a river." +
  "There is crop vegetation of a number of fruits & vegetables (apple, mango, guava, papaya, watermelon, muskmelon," +
  "dragon fruit, banana, strawberry, grapes, potato, tomato, onion, cucumber, radish, carrot, brinjal and so much more)." +
  "It has both cylcling and trekking tracks for you to exercise." +
  "All tents are camouflaged. There is a barbeque area, briefing area for team games, dining area, Amar Jyoti." +
  "The entire camp is pet friendly.";

const About = () => {
  return (
    <div className="about">
      <div className="aboutImage">
        <img src={img} alt="" />
      </div>
      <div className="heading">
        <h1>About Camp</h1>
      </div>
      <div className="firstParagraph">
        <div className="image">
          <img src={firstParaImg} alt="" />
        </div>
        <div className="text">
          <p>{firstPara}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
