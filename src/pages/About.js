import React from "react";
import "../styles/About.css";
import img1 from "../assets/images/img33.jpg";
import img2 from "../assets/images/img8.png";
import Footer from "../components/Footer";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import StickyButton from "../components/sticky_button/StickyButton";

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
      <StickyButton />
      <Fade>
        <div className="aboutImage">
          <img src={img1} alt="" />
        </div>
      </Fade>
      <Reveal bottom>
        <div className="heading">
          <h1>About Camp</h1>
        </div>
        <div className="paragraph">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="text">
            <p>{firstPara}</p>
          </div>
        </div>
      </Reveal>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
