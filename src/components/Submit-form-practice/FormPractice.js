import React, { useState } from "react";

import "./FormPractice.css";

const FormPractice = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true,
  });

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }
    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter");
    }
  }

  return (
    <div className="main">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            className="form--input"
            name="email"
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Confirm password"
            className="form--input"
            name="confirmPassword"
          />

          <div className="form--marketing">
            <input
              onChange={handleChange}
              checked={formData.joinedNewsletter}
              id="okayToEmail"
              type="checkbox"
              name="joinedNewsletter"
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button className="form--submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default FormPractice;
