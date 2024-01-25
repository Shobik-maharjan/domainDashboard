import React from "react";
import Login from "./components/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/auth/ForgetPassword";
import Content from "./components/content/Content";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/" element={<Content />} />\
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
