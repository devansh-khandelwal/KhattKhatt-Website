import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../assets/logo/logo1_without_bg.png";

function Navbar() {
  const navRef = useRef();
  const [selectedLink, setSelectedLink] = useState("");

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <header>
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <nav ref={navRef}>
        <a
          href="/"
          className={selectedLink === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </a>
        <a
          href="/about"
          className={selectedLink === "about" ? "active" : ""}
          onClick={() => handleLinkClick("about")}
        >
          About Camp
        </a>
        <a
          href="/tents"
          className={selectedLink === "tents" ? "active" : ""}
          onClick={() => handleLinkClick("tents")}
        >
          Our Tents
        </a>
        <a
          href="/activities"
          className={selectedLink === "activities" ? "active" : ""}
          onClick={() => handleLinkClick("activities")}
        >
          Activities
        </a>
        <a
          href="/gallery"
          className={selectedLink === "gallery" ? "active" : ""}
          onClick={() => handleLinkClick("gallery")}
        >
          Gallery
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
