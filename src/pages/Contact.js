import React from "react";
import "../styles/Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { Link } from "@mui/material";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="body">
        <div className="address">
          <div className="icon">
            <LocationOnIcon sx={{ color: "#0047AB" }} />
          </div>
          <div className="subHeading">Address</div>
          <div className="text">
            234, 2nd Cross, Kundahalli,
            <br />
            ITPL main Road, Bangalore 560037
          </div>
        </div>
        <div className="email">
          <div className="icon">
            <EmailIcon sx={{ color: "#0047AB" }} />
          </div>
          <div className="subHeading">Email</div>
          <div className="text">
            <Link href="#" variant="body2">
              {"customercare@majorscamp.com "}
              <br />
              {"Booking@majorscamp.com"}
              <br />
              {"Help@majorscamp.com"}
            </Link>
          </div>
        </div>
        <div className="phone">
          <div className="icon">
            <LocalPhoneRoundedIcon sx={{ color: "#0047AB" }} />
          </div>
          <div className="subHeading">Phone</div>
          <div className="text">
            +91 6362147935
            <br />
            +91 9155607067
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
