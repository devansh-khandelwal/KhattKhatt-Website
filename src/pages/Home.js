import React from "react";
import "../styles/Home.css";
import Carousel from "../components/carousel/Carousel";
import img2 from "../assets/images/img24.jpeg";
import img3 from "../assets/images/img26.jpeg";
import img4 from "../assets/images/img20.jpeg";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import StickyButton from "../components/sticky_button/StickyButton";

const Home = () => {
  return (
    <div className="home">
      <Fade>
        <div className="carousel">
          <Carousel />;
        </div>
      </Fade>
      <StickyButton />
      <div className="body">
        <div className="secondContainer">
          <Fade>
            <div className="heading">
              <h1>A day to Live a Soldier's life</h1>
            </div>
            <div className="secondParagraph">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  ad minus adipisci magni ratione! Distinctio saepe praesentium
                  obcaecati eaque tenetur, enim aperiam molestiae voluptates
                  odio quia deserunt officia beatae dolorum adipisci nesciunt
                  corporis suscipit esse labore corrupti iure! Reiciendis, quod?
                </p>
              </div>
              <div className="image">
                <img src={img2} alt="" />
              </div>
            </div>
          </Fade>
        </div>
        <div className="firstContainer">
          <Fade>
            <div className="heading">
              <h1>Fun gets better when it teaches something</h1>
            </div>
            <div className="firstParagraph">
              <div className="image">
                <img src={img3} alt="" />
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  ad minus adipisci magni ratione! Distinctio saepe praesentium
                  obcaecati eaque tenetur, enim aperiam molestiae voluptates
                  odio quia deserunt officia beatae dolorum adipisci nesciunt
                  corporis suscipit esse labore corrupti iure! Reiciendis, quod?
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="secondContainer">
          <Fade>
            <div className="heading">
              <h1>Journey of Authentic Jungle Experience Begins Here</h1>
            </div>
            <div className="secondParagraph">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  ad minus adipisci magni ratione! Distinctio saepe praesentium
                  obcaecati eaque tenetur, enim aperiam molestiae voluptates
                  odio quia deserunt officia beatae dolorum adipisci nesciunt
                  corporis suscipit esse labore corrupti iure! Reiciendis, quod?
                </p>
              </div>
              <div className="image">
                <img src={img4} alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
