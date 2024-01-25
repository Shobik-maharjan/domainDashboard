import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(email);
  console.log(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "email@gmail.com" || email !== "") {
      if (password === "password" || password !== "") {
        navigate("/content");
      }
    } else {
      setError("Please enter your email and password correctly");
    }
  };
  return (
    <>
      <div className="form-container">
        <h2 className="form-heading">Please Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email : </label>
            <input
              value={email}
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password here"
            />
          </div>
          <button type="submit" id="form-login">
            Login
          </button>

          <label htmlFor="error" className="error">
            {error}
          </label>

          <div className="forget-password">
            <Link to={"/"}>Register</Link>
            <Link to="/forgetPassword">forget password?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
