import React from "react";
import Login from "./components/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/auth/ForgetPassword";
import Content from "./components/content/Content";
import Countdown from "./components/content/Countdown";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/" element={<Content />} />
          {/* <Route path="/" element={<Countdown />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
