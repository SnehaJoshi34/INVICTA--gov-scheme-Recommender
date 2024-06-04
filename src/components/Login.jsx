import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    alert("Forgot Password clicked!");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div style={{ textAlign: "center" }}>
          {/* <button type="submit">Login</button> */}
          <Link to="/Home">
            <button type="submit">Login</button>
          </Link>
          <Link to="/Signup">
            <button type="submit">Signup</button>
          </Link>
        </div>

        <div className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </div>
      </form>
    </div>
  );
};

export default Login;
