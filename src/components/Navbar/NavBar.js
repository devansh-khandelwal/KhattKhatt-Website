import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../assets/logo/logo1.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/about">About Camp</a>
        <a href="/tents">Our Tents</a>
        <a href="/activities">Activities</a>
        <a href="/gallery">Gallery</a>
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
