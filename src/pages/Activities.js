import React from "react";
import "../styles/Activities.css";
import ActionAreaCard from "../components/Card";
import Footer from "../components/Footer";
import Reveal from "react-reveal/Reveal";
import StickyButton from "../components/sticky_button/StickyButton";
import armyDress from "../assets/activities_images/army dress.png";
import armyThemed from "../assets/activities_images/Army themed.gif";
import ATV from "../assets/activities_images/ATV.jpg";
import boat from "../assets/activities_images/boat.jpg";
import cycle from "../assets/activities_images/cycle_1.jpg";
import jeep from "../assets/activities_images/jeep.jpg";

const Activities = () => {
  const cardData = [
    {
      title: "Army Themed Games",
      img: armyThemed,
      text: "(Treasure Hunt, Leadership game, Team Spirit, Battlefield war games, etc)",
    },
    {
      title: "Cycling (Optional)",
      img: cycle,
      text: "Let's feel like a child again.",
    },
    {
      title: "Boat Ride with Floating Snacks (Optional)",
      img: boat,
      text: "Food+ Water + Nature makes it more special.",
    },
    {
      title: "ATV (Optional)",
      img: ATV,
      text: "Let's ride in REAL, not just on REEL",
    },
    {
      title: "Army Themed Photo Zone (Included)",
      img: "https://im.whatshot.in/img/2020/Jan/battalioonog-1580012601.jpg",
      text: "Living Like a Soldier - Photo toh Banta hai!",
    },
    {
      title: "Barbeque your food (Included)",
      img: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text: "The jungle experience just got REAL",
    },
    {
      title: "Crop Tour (Included)",
      img: "https://www.dtnpf.com/mydtn-public-core-portlet/servlet/GetStoredImage?category=CMS&symbolicName=wheat-tour-joel-reichenberger-img_9525.jpg&width=696",
      text: "Time to Appreciate our FARMERS",
    },
    {
      title: "Site Seeing on Jeep (Optional)",
      img: jeep,
      text: "Beautiful Site on a Beautiful Camouflaged JEEP",
    },
    {
      title: "Pluck your own Vegetable and get it cooked by us.",
      img: "https://www.foodandwine.com/thmb/QpxHuBw1ACzW_G9TBNhuOUdxnqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-way-to-store-vegetables-to-keep-them-fresh-as-long-as-possible-FT-BLOG0320-2-d92cc1b173504702ba0bf5cdaec82c8a.jpg",
      text: "Learn more in Detail about CROPS",
    },
    {
      title: "Army Themed Museum (Included)",
      img: "https://previews.123rf.com/images/lestertair/lestertair1708/lestertair170801077/85151528-budapest-hungary-22-august-2017-museum-of-the-history-of-the-military-of-the-hungarian-army-with.jpg",
      text: "Because Knowledge makes everyone Wiser",
    },
    {
      title: "Dress like a Soldier (Optional)",
      img: armyDress,
      text: "The feeling of a Soldier gets REAL with the Dress",
    },
    {
      title: "AMAR Jyoti",
      img: "https://media.istockphoto.com/id/802504394/photo/amar-jawan-jyoti-in-jallianwala-bagh-memorial-in-amritsar-india.jpg?s=612x612&w=0&k=20&c=4yY1-HGX_XoewTlsUwVaRBg7ObVeVjf-3xT5JG_yaEE=",
      text: "Tribute Towards Every Martyr who gave their Life so that we are SAFE",
    },
  ];

  const rows = [];
  for (let i = 0; i < cardData.length; i += 3) {
    rows.push(cardData.slice(i, i + 3));
  }

  return (
    <div className="activities">
      <StickyButton />
      <div className="body">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((card, cardIndex) => (
              <Reveal bottom>
                <div key={cardIndex} className="card-wrapper">
                  <ActionAreaCard
                    title={card.title}
                    img={card.img}
                    text={card.text}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Activities;
