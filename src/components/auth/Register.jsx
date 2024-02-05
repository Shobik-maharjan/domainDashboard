import { push, ref } from "firebase/database";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { database } from "./database/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/database/Firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setError(errorMessage);
        });
    } else {
      setError("The password and confirmation password do not match.");
    }
  };
  return (
    <>
      <div className="form-container">
        <h2 className="form-heading">Register</h2>
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
          <div className="input-container">
            <label htmlFor="confirmPassword">Confirm Password : </label>
            <input
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <button type="submit" id="form-login">
            Register
          </button>

          <div className="error">{error}</div>

          <div className="forget-password">
            <Link to={"/"}>Login</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
