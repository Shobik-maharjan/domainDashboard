import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./database/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    if (
      email !== "" &&
      email !== null &&
      password !== "" &&
      password !== null
    ) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("authenticated", user.uid);
          toast.success("logged in successfully");
          setLoading(false);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((err) => {
          const errorMessage = err.message;
          setError(errorMessage);
          setPassword("");
          setLoading(false);
        });
    } else {
      setError("email and password is required");
    }
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
          <button type="submit" id="form-login" className="submit-btn">
            Login
          </button>

          <div className="error">{error}</div>

          <div className="forget-password">
            <Link to={"/register"}>Register</Link>
            <Link to="/forgetPassword">forget password?</Link>
          </div>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Login;
