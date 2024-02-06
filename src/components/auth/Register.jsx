import { push, ref } from "firebase/database";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../auth/database/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(auth);
    if (email === auth) {
      console.log("email same");
      return;
    }

    if (loading) {
      return;
    }
    if (
      email !== "" &&
      email !== null &&
      password !== "" &&
      password !== null
    ) {
      if (password === confirmPassword) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            toast.success("User registered successfully");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
            setLoading(false);
          })
          .catch((err) => {
            const errorMessage = err.message;
            console.log(err);
            setError(errorMessage);
            setLoading(false);
          });
      } else {
        setError("password and confirmation password do not match.");
      }
    } else {
      setError("All field are required");
    }
  };
  return (
    <>
      <div className="form-container">
        <h2 className="form-heading">Register</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email" className="required">
              Email :
            </label>
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
            <label htmlFor="password" className="required">
              Password :
            </label>
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
            <label htmlFor="confirmPassword" className="required">
              Confirm Password :
            </label>
            <input
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <button type="submit" id="form-login" className="submit-btn">
            Register
          </button>

          <div className="error">{error}</div>

          <div className="forget-password">
            <Link to={"/"}>Login Here</Link>
          </div>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Register;
