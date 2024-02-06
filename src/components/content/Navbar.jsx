import React, { useState } from "react";
import "./navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { TbWorldWww } from "react-icons/tb";

const Navbar = () => {
  const navigate = useNavigate();
  const [colorChange, setColorchange] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const logout = () => {
    setShowLogoutDialog(true);
  };

  const closeLogoutDialog = () => {
    setShowLogoutDialog(false);
  };

  const confirmLogout = () => {
    localStorage.removeItem("authenticated");
    closeLogoutDialog();
    navigate("/login");
  };

  return (
    <>
      <main
        className={
          colorChange ? "navbar-container colorChange" : "navbar-container"
        }
      >
        <ul className="navbar">
          <li>
            <NavLink className="nav-logo">
              <TbWorldWww />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <label htmlFor="search" className="nav-search__label">
                Search:
              </label>
              <input
                type="search"
                name="search"
                id="search"
                className="nav-search__input"
              />
            </NavLink>
          </li>
          <li className="nav-avatar">
            <NavLink className="">
              <RxAvatar />
            </NavLink>
          </li>
          <li>
            <NavLink onClick={logout}>Logout</NavLink>
          </li>
        </ul>
        {showLogoutDialog && (
          <div className="logout_dialog_outside">
            <dialog open className="logout_dialog">
              <p>Are you sure you want to Logout?</p>
              <button
                onClick={closeLogoutDialog}
                className="logout_dialog__btn"
              >
                Close
              </button>
              <button onClick={confirmLogout} className="logout_dialog__btn">
                Logout
              </button>
            </dialog>
          </div>
        )}
      </main>
    </>
  );
};

export default Navbar;
