import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Page from "./Page";
import "./content.scss";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  // const [authenticated, setAuthenticated] = useState(null);
  const loggedInUser = localStorage.getItem("authenticated");
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Page />
    </>
  );
};

export default Content;
