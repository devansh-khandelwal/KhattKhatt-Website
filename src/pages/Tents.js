import React from "react";
import "../styles/Tents.css";
import Footer from "../components/Footer";
import TentsCard from "../components/tents_card/TentsCard";
import Fade from "react-reveal/Fade";

const img1 =
  "https://media.istockphoto.com/id/614333886/photo/illuminated-green-tent-under-stars-at-night-forest.jpg?s=612x612&w=0&k=20&c=82MnAs8eS6LfVwY9zmphCpZdSZHFSoPB6nh07BtZ-oo=";
const img2 =
  "https://cdn1.goibibo.com/voy_ing/t_g/f1b0aba896d511eb878d0242ac110003.jpg?downsize=431:230";
const img3 =
  "https://r1imghtlak.mmtcdn.com/183c8346535511ecadf70a58a9feac02.png?&output-quality=75&downsize=910:612&crop=910:612;0,49&output-format=jpg";
const img4 =
  "https://cdn.trendhunterstatic.com/thumbs/swag-tent.jpeg?auto=webp";
const img5 =
  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201507/tree-house-story_647_071315064353.jpg?VersionId=bvq.uOokchcak3MXKMW.Czy5CfwGkKe1";

const content1 = () => {
  return (
    <>
      <li>Stay in tent beside water body under sky</li>
      <li>Common Restroom</li>
      <li>Capacity - 1 Adult</li>
      <li>Sleeping Bag</li>
      <li>
        Meals Included: (Tea & Snacks, Barbeque, Dinner, Morning Tea &
        Breakfast)
      </li>
      <li>Hot Water Availability</li>
      <li>Parking</li>
      <li>Bring your own toiletries</li>
    </>
  );
};

const content2 = () => {
  return (
    <>
      <li>The tent is constructed 1 feet above ground</li>
      <li>Individual Restroom</li>
      <li>Capacity - 2 Adult,1 Kid (Below 10 years)</li>
      <li>Camouflaged seating area</li>
      <li>Twin Size Mattress</li>
      <li>
        Meals Included: (Tea & Snacks, Barbeque, Dinner, Morning Tea &
        Breakfast)
      </li>
      <li>Individual Restroom</li>
      <li>Hot Water Availability</li>
      <li>Parking</li>
      <li>Bring your own toiletries</li>
    </>
  );
};

const content3 = () => {
  return (
    <>
      <li>The tent is constructed 2 feet above ground</li>
      <li>Individual Restroom</li>
      <li>Capacity-2 Adult 1 Kid (Below 10 years) </li>
      <li>Camouflaged seating area</li>
      <li>Twin Size Mattress</li>
      <li>
        Meals Included: (Tea & Snacks, Barbeque, Dinner, Morning Tea &
        Breakfast)
      </li>
      <li>Hot Water Availability</li>
      <li>Parking</li>
      <li>Bring your own toiletries</li>
    </>
  );
};

const content4 = () => {
  return (
    <>
      <li>The tent is constructed 4 feet above ground</li>
      <li>Spacious</li>
      <li>Individual Restroom</li>
      <li>Capacity - 2 Adult 1 Kid (Below 10 years)</li>
      <li>Camouflaged seating area</li>
      <li>Twin Size Mattress</li>
      <li>
        Meals Included: (Tea & Snacks, Barbeque, Dinner Morning Tea & Breakfast)
      </li>
      <li>Individual Restroom</li>
      <li>Hot Water Availability</li>
      <li>Parking</li>
      <li>Bring your own toiletries</li>
    </>
  );
};

const content5 = () => {
  return (
    <>
      <li>The hut is constructed 12 feet above the ground on natural tree.</li>
      <li>It consists of a Personal open Terrace with splash pool</li>
      <li>Tree Hut</li>
      <li>Capacity - 2 Adult 1 Kid (Below 10 years)</li>
      <li>Camouflaged seating area</li>
      <li>Twin Size Mattress</li>
      <li>
        Meals Included: (Tea & Snacks, Barbeque, Dinner, Morning Tea &
        Breakfast)
      </li>
      <li>Personal Barbeque</li>
      <li>Resting Chairs</li>
      <li>Personal LED</li>
      <li>Separate Seating Area</li>
      <li>Individual Restroom</li>
      <li>Hot Water Availability</li>
      <li>Parking</li>
      <li>Bring your own toiletries</li>
    </>
  );
};

const Tents = () => {
  return (
    <>
      <Fade>
        <div className="cards">
          <TentsCard
            img={img1}
            title="Wolf Tent (1500 per person)"
            content={content1}
            Link="https://checkout.razorpay.com/v1/payment-button.js"
            Attribute="pl_M9YqghBG16nOUU"
          />
          <TentsCard
            img={img2}
            title="Leopard Tent (2000 per person)"
            content={content2}
            Link="https://checkout.razorpay.com/v1/payment-button.js"
            Attribute="pl_MCZPI6rPAxHosF"
          />
          <TentsCard
            img={img3}
            title="Tiger Tent (2600 per person)"
            content={content3}
            Link="https://checkout.razorpay.com/v1/payment-button.js"
            Attribute="pl_MCZmKsbVlehoCT"
          />
          <TentsCard
            img={img4}
            title="Panther Tent (3000 per person)"
            content={content4}
            Link="https://checkout.razorpay.com/v1/payment-button.js"
            Attribute="pl_MCZotALPOwMZwR"
          />
          <TentsCard
            img={img5}
            title="Cheetah Hut (3500 per person)"
            content={content5}
            Link="https://checkout.razorpay.com/v1/payment-button.js"
            Attribute="pl_MCZrOiKJE7MG3z"
          />
        </div>
      </Fade>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Tents;
