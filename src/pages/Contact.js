import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactTitle">
        <h1>Contact Details</h1>
      </div>
      <div className="contactDetails">
        <div className="email">
          Email ID -{" "}
          <span>
            <a
              href="customercare@majorscamp.com Booking@majorscamp.com
        Help@majorscamp.com"
            >
              customercare@majorscamp.com Booking@majorscamp.com
              Help@majorscamp.com
            </a>
          </span>
        </div>
        <div className="phoneNumber">
          Phone Number- <span>+91 6362147935 , + 91 9155607067</span>
        </div>
        <div className="linkToVenue">
          Link to Venue-{" "}
          <span>
            <a href="/">Link</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
