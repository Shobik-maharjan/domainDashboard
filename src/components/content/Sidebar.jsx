import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidenav">
        <ul>
          <li>Domain</li>
          <ul>
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
          <li>Env</li>
          <li>Inf</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
