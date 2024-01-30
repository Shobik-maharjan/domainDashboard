import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Page from "./Page";
import Countdown from "./Countdown";
import "./content.scss";

const Content = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Page />
    </>
  );
};

export default Content;
