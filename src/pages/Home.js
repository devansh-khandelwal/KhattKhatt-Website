import React from "react";
import "../styles/Home.css";
import Carousel from "../components/carousel/Carousel";
import img1 from "../assets/images_2/Picture18.jpg";
import img2 from "../assets/images_2/Picture19.jpg";
import img3 from "../assets/images_2/Picture6.png";
import img4 from "../assets/images_2/Picture7.png";
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
        <div className="firstContainer">
          <Fade>
            <div className="heading">
              <h1>Martyr's Ki Mitti</h1>
            </div>
            <div className="firstParagraph">
              <div className="image">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <li>
                  The Kalash contains Mitti from more than 200 Martyr's Homeland
                </li>
                <li>
                  Major's Camp is making it possible to give our Tribute to 200
                  Martyr's at it's Camp.
                </li>
              </div>
            </div>
          </Fade>
        </div>
        <div className="secondContainer">
          <Fade>
            <div className="heading">
              <h1>A Day to Live a Soldier's Life</h1>
            </div>
            <div className="secondParagraph">
              <div className="text">
                <li>
                  As we all know how much Non-defense personnel are fond to know
                  about the complete insights of Army/Defense system. For
                  example, their training, the war insights, life contribution
                  information, tthe life sacrifices and the Josh towards our
                  country.
                </li>
                <li>
                  We are giving you an experience and learning to Live a
                  Soldier's Life for a day with our Amazing Army Activities and
                  Stay.
                </li>
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
              <h1>Fun gets better when it teaches something.</h1>
            </div>
            <div className="firstParagraph">
              <div className="image">
                <img src={img3} alt="" />
              </div>
              <div className="text">
                <li>
                  Information of Heroes/Martyr's whose contribution should be
                  known to everyone of us but unfortunately, there isn't any
                  platform.
                </li>
                <li>
                  Captain Anuj Nayyar, Colonel Neelakantan Jayachandran Nair,
                  Brigadier Kuldip Singh Chandpuri, Gurbachan Singh Salaria,
                  Rifleman Jaswant Singh Rawat.
                </li>
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
                <li>A stay in nature away from city pollution. Jungle Style</li>
                <li>
                  We are providing authentic jungle experience ( Survival,
                  emergency rescue, barbeque , setting up tents, First Aid,
                  firefighting, actions to be taken in case of a snake bite)
                </li>
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
