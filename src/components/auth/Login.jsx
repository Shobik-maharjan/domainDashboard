import React, { useState } from "react";
import "./login.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./database/Firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("authenticated", user.uid);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode, errorMessage);
      });
  };
  return (
    <>
      <div className="form-container">
        <h2 className="form-heading">Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email : </label>
            <input
              value={email}
              type="text"
              name="email"
              id="email"
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password : </label>
            <input
              value={password}
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <button type="submit" id="form-login">
            Login
          </button>

          <div className="error">{error}</div>

          <div className="forget-password">
            <Link to={"/register"}>Register</Link>
            <Link to="/forgetPassword">forget password?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
