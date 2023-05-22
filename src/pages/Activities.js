import React from "react";
import "../styles/Activities.css";
import ActionAreaCard from "../components/Card";

const Activities = () => {
  const cardData = [
    {
      title: "Army Themed Games",
      img: "https://i.pinimg.com/originals/43/aa/e2/43aae200b08373696812d86175d844ff.png",
      text: "(Treasure Hunt, Leadership game, Team Spirit, Battlefieldwar games, etc)",
    },
    {
      title: "Boat Ride with Floating Snacks",
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/09/20/cd.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus.",
    },
    {
      title: "Cycling",
      img: "https://images.moneycontrol.com/static-mcnews/2021/10/coen-van-de-broek-On4QWhHJCEM-unsplash-1-770x433.jpg?impolicy=website&width=770&height=431",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "ATV",
      img: "https://powersports.honda.com/-/media/products/segment/atv/atv-assets/fourtrax-foreman-rubicon-4x4-750x750.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "Army Themed Photo Zone",
      img: "https://im.whatshot.in/img/2020/Jan/battalioonog-1580012601.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "Barbeque your food",
      img: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "Crop Tour",
      img: "https://www.dtnpf.com/mydtn-public-core-portlet/servlet/GetStoredImage?category=CMS&symbolicName=wheat-tour-joel-reichenberger-img_9525.jpg&width=696",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "Site Seeing on Jeep",
      img: "https://images.thrillophilia.com/image/upload/s--JdeYuJKr--/c_fill,h_775,q_auto,w_1600/f_auto,fl_strip_profile/v1/images/photos/000/141/945/original/1548405028_shutterstock_1083558866.jpg.jpg?1548405028",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "Pluck your own Vegetable and get it cooked by us.",
      img: "https://www.foodandwine.com/thmb/QpxHuBw1ACzW_G9TBNhuOUdxnqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-way-to-store-vegetables-to-keep-them-fresh-as-long-as-possible-FT-BLOG0320-2-d92cc1b173504702ba0bf5cdaec82c8a.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "Light & Sound Show",
      img: "https://haryanatourism.gov.in/WriteReadData/mediafiles/image/jyotisar_pic11.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "Army Themed Museum",
      img: "https://previews.123rf.com/images/lestertair/lestertair1708/lestertair170801077/85151528-budapest-hungary-22-august-2017-museum-of-the-history-of-the-military-of-the-hungarian-army-with.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "Dress like a Soldier",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpEkXUHuJGD14CN4j4bxAULPlTlUL-obQW_dImayFew&usqp=CAU&ec=48665699",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
    {
      title: "AMAR Jyoti",
      img: "https://media.istockphoto.com/id/802504394/photo/amar-jawan-jyoti-in-jallianwala-bagh-memorial-in-amritsar-india.jpg?s=612x612&w=0&k=20&c=4yY1-HGX_XoewTlsUwVaRBg7ObVeVjf-3xT5JG_yaEE=",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repellendus",
    },
  ];

  const rows = [];
  for (let i = 0; i < cardData.length; i += 3) {
    rows.push(cardData.slice(i, i + 3));
  }

  return (
    <div className="activities">
      <h1>Activities</h1>
      <div className="body">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((card, cardIndex) => (
              <div key={cardIndex} className="card-wrapper">
                <ActionAreaCard
                  title={card.title}
                  img={card.img}
                  text={card.text}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
