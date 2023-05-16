import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
var React = require("react");
var Carousel = require("react-responsive-carousel").Carousel;

function DemoCarousel() {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
    >
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg"
          alt=""
        />
      </div>
    </Carousel>
  );
}

export default DemoCarousel;
