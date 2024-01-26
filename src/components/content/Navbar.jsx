import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <main
      className={
        colorChange ? "navbar-container colorChange" : "navbar-container"
      }
    >
      <ul className="navbar">
        <li>
          <NavLink>Logo</NavLink>
        </li>
        <li>
          <NavLink>Search</NavLink>
        </li>
        <li>
          <NavLink>Profile</NavLink>
        </li>
      </ul>
    </main>
  );
};

export default Navbar;
