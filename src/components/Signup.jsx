import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signupp-container">
      <form className="signupp-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-groupp">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupp">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit">Sign Up</button>
        </div>
        <p style={{ textAlign: "center" }}>
          {" "}
          Already registered ?? Kindly Login
        </p>

        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <button type="submit">login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
