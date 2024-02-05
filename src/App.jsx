import React from "react";
import Login from "./components/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/auth/ForgetPassword";
import Content from "./components/content/Content";
import Countdown from "./components/content/Countdown";
import Register from "./components/auth/Register";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import PublicRoutes from "./components/auth/PublicRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Content />} />
          </Route>
          {/* <Route path="/" element={<Countdown />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
