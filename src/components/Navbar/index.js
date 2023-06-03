import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import logo from "../../assets/logo/logo1.png";

const Navbar = () => {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink>
          <img
            src={logo}
            alt="logo"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </NavLink>
        <NavLink to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          About Camp
        </NavLink>
        <NavLink to="/tents" activeStyle>
          Our Tents
        </NavLink>
        <NavLink to="/activities" activeStyle>
          Activities
        </NavLink>
        <NavLink to="/gallery" activeStyle>
          Gallery
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
