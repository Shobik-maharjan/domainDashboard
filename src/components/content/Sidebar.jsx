import React, { useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = () => {
  const [showHide, setShowHide] = useState();

  function dropdownShowHide() {
    console.log("clicked");
    !showHide ? setStyle("dropdown-showHide") : setStyle(" ");
  }
  return (
    <>
      <div className="sidenav">
        <ul>
          <li className="sidenav__dropdown" onClick={dropdownShowHide()}>
            Domain <RiArrowDropDownLine />
          </li>
          <ul className={showHide}>
            <li>
              <Link>List</Link>
            </li>
            <li>
              <Link>Create</Link>
            </li>
            <li>
              <Link>Edit</Link>
            </li>
            <li>
              <Link>Status</Link>
            </li>
          </ul>
          <li className="sidenav__dropdown">
            Env <RiArrowDropDownLine />
          </li>
          <li className="sidenav__dropdown">
            Inf <RiArrowDropDownLine />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
