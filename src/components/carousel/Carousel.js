// eslint-disable-next-line
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import img1 from "../../assets/cropped_images/img18-cropped.jpg";
import img2 from "../../assets/images/img6.jpeg";
import img3 from "../../assets/cropped_images/img12-cropped.jpg";
import img4 from "../../assets/cropped_images/img19-cropped.jpg";
import img5 from "../../assets/cropped_images/img16-cropped.jpg";
import img6 from "../../assets/cropped_images/img14-cropped.jpg";

var React = require("react");
var Carousel = require("react-responsive-carousel").Carousel;

function DemoCarousel() {
  return (
    <>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
      </Carousel>
      <div className="mainHeading">
        <h1>Welcome to Major's Camp</h1>
        <h2>(Ek Shaam Fauj Ke Naam)</h2>
      </div>
    </>
  );
}

export default DemoCarousel;
