import React from "react";

import classes from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  // One Way

  //   const nameHandler = (event) => {
  //     setName((prevName) => {
  //       return {
  //         ...prevName,
  //         firstName:
  //           event.target.name === "firstName"
  //             ? event.target.value
  //             : prevName.firstName,
  //         lastName:
  //           event.target.name === "lastName"
  //             ? event.target.value
  //             : prevName.lastName,
  //       };
  //     });
  //   };

  // Another Way

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevName) => {
      return {
        ...prevName,
        [name]: type === "checkbox" ? checked : value,
      };
      // return {
      //   ...prevName,
      //   [event.target.name]: event.target.value,
      // };
    });
  };

  // Another Way

  //   function firstNameHandler(event) {
  //     setName((prevName) => {
  //       return {
  //         ...prevName,
  //         firstName: event.target.value,
  //       };
  //     });
  //   }
  //   function lastNameHandler(event) {
  //     setName((prevName) => {
  //       return {
  //         ...prevName,
  //         lastName: event.target.value,
  //       };
  //     });
  //   }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      {/* <input onChange={firstNameHandler} type="text" placeholder="First Name" />
      <input onChange={lastNameHandler} type="text" placeholder="Last Name" /> */}
      <input
        className={classes.input}
        onChange={handleChange}
        name="firstName"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
      />
      <input
        className={classes.input}
        onChange={handleChange}
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
      />
      <input
        className={classes.input}
        type="email"
        name="email"
        placeholder="robert@downey.com"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        className={classes.comments}
        value={formData.comments}
        placeholder="Comments"
        name="comments"
        onChange={handleChange}
      />
      <input
        onChange={handleChange}
        checked={formData.isFriendly}
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />
      <fieldset>
        <legend>Current employment status</legend>
        <input
          onChange={handleChange}
          value="unemployed"
          name="employment"
          type="radio"
          id="unemployed"
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          onChange={handleChange}
          value="part-time"
          name="employment"
          type="radio"
          id="part-time"
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          onChange={handleChange}
          value="full-time"
          name="employment"
          type="radio"
          id="full-time"
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default Form;

// 8:16:05 to be continued ...
