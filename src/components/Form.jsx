import React, { useState } from "react";
import countriesCode from "../data/countriesCode";
import "./form.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [countryCode, setCountryCode] = useState("004");
  const [submitValue, setSubmitValue] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const regTest = /^[0-9\b]+$/;
    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "lastName") {
      setLastName(value);
    }
    if (name === "mobileNum" && (value === "" || regTest.test(value))) {
      setMobileNum(value);
    }
    if (name === "countryCode") {
      setCountryCode(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorObj = {};
    if (firstName.length <= 5) {
      console.log("erorororo 1");
      errorObj = {
        firstName: "firstName should be greater than 5 character.",
      };
    }
    if (lastName.length <= 5) {
      console.log("erorororo 2");
      errorObj = {
        ...errorObj,
        lastName: "lastName should be greater than 5 character.",
      };
    }
    if (mobileNum === "") {
      errorObj = {
        ...errorObj,
        mobileNum: "Mobile number is required",
      };
    }
    if (countryCode === "") {
      errorObj = {
        ...errorObj,
        countryCode: "Country is required",
      };
    }
    if (Object.keys(errorObj).length === 0) {
      setError({});
      setSubmitValue({ firstName, lastName, mobileNum, countryCode });
    } else {
      setError(errorObj);
    }
  };

  return (
    <div className="inside-container">
      <h1 className="heading">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <label>FirstName:</label>
          <input
            className="addup-value"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
          {error.firstName && <span className="error">{error.firstName}</span>}
        </div>
        <div className="fields">
          <label>LastName:</label>
          <input
            className="addup-value"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
          {error.lastName && <span className="error">{error.lastName}</span>}
        </div>
        <div className="fields">
          <label>Mobile Number:</label>
          <input
            className="addup-value"
            type="text"
            name="mobileNum"
            value={mobileNum}
            onChange={handleChange}
          />
          {error.mobileNum && <span className="error">{error.mobileNum}</span>}
        </div>
        <div className="fields">
          <label>Country Code:</label>
          <select
            className="addup-value"
            name="countryCode"
            onChange={handleChange}
          >
            {countriesCode.map((item, index) => {
              return (
                <option key={index} value={item.number}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {error.countryCode && (
            <span className="error">{error.countryCode}</span>
          )}
        </div>
        <input type="submit" />
      </form>
      {Object.keys(submitValue).length > 1 && (
        <div>
          <h4>The submitted object is: </h4>
          <p>{JSON.stringify(submitValue)}</p>
        </div>
      )}
    </div>
  );
}
