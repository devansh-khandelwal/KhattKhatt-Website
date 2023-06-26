import React from "react";
import "../styles/About.css";
import img1 from "../assets/images/img33.jpg";
import img2 from "../assets/images_2/Picture8.png";
import Footer from "../components/Footer";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import StickyButton from "../components/sticky_button/StickyButton";

const firstPara = (
  <ul>
    <li>Major's Camp is spread in 100 Acres</li>
    <li>
      The entire premises is Army themed and each spot at Major's Camp narrates
      a warrior's / Army's story
    </li>
    <li>Surrounded by 400 acres of nature and greenery</li>
    <li>Beautiful Mountain View</li>
    <li>River View along side</li>
    <li>
      Crop Vegetation of fruits & Vegetables (apple, mango, guava, papaya,
      watermelon, muskmelon, dragon fruit, banana, strawberry, grapes, potato,
      tomato, onion, cucumber, radish, carrot, brinjal and so much more)
    </li>
    <li>Trekking, Cycling Track and motorbike off roading</li>
    <li>Camouflaged tents, dining & Barbeque Area</li>
    <li>Camouflaged Briefing Area for Team activities.</li>
    <li>PET Friendly</li>
  </ul>
);

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
          <h1>About Us</h1>
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
