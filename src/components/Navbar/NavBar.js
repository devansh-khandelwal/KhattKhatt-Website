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
        <a href="/KhattKhatt-Website/">Home</a>
        <a href="/KhattKhatt-Website/about">About Camp</a>
        <a href="/KhattKhatt-Website/tents">Our Tents</a>
        <a href="/KhattKhatt-Website/activities">Activities</a>
        <a href="/KhattKhatt-Website/gallery">Gallery</a>
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
