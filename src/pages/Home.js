import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div>
        <h3>
          1. As we all know how much Non-defense personnel are fond to know
          about the complete insights of Army / Defense system. For an example
          their training, the war insights, life contribution information, the
          life sacrifices and the JOSH towards our country
        </h3>
      </div>
      <div>
        <h3>
          2. We are here giving you an experience and learning to Live a
          soldier's life for a day. (Ek Shaam Fauj Ke Naam)
        </h3>
      </div>
      <div>
        <h3>
          3. A stay in nature away from city pollution, completely Army Themed
        </h3>
      </div>
      <div>
        <h3>
          4. Provide authentic jungle experience ( Survival, emergency rescue,
          barbeque , setting up tents, First Aid, firefighting, actions to be
          taken in case of a snake bite)
        </h3>
      </div>
      <div>
        <h3>
          5. Information of few Heroes/Martyrs whose contribution should be
          known to every one of us but unfortunately there isn't any platform.
          Captain Anuj Nayyar, Colonel Neelakantan Jayachandran Nair, Brigadier
          Kuldip Singh Chandpuri., Gurbachan Singh salaria, Rifleman Jaswant
          Singh Rawat.
        </h3>
      </div>
      <div className="buttons">
        <div className="knowMoreButton">
          <a href="/about">
            <button style={{ width: "100px", height: "50px" }}>
              Know More
            </button>
          </a>
        </div>
        <div className="bookNowButton">
          <a href="/tents">
            <button style={{ width: "100px", height: "50px" }}>Book Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
