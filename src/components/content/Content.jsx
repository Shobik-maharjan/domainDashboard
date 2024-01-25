import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Page from "./Page";

const Content = () => {
  return (
    <>
      <div>Congratulation login successful</div>
      <Navbar />
      <Sidebar />
      <Page />
    </>
  );
};

export default Content;
