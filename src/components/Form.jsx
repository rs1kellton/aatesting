import React, { useState } from "react";
import countriesCode from "../data/countriesCode";
export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [countryCode, setCountryCode] = useState("004");
  const [submitValue, setSubmitValue] = useState({});
  const [error, setError] = useState({});

  let spanStyle = { color: "red" };

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
    console.log(error);
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
      setSubmitValue({ firstName, lastName, mobileNum, countryCode });
    } else {
      setError(errorObj);
    }

    console.log(errorObj);
  };
  console.log("submitValue: ", submitValue, "error: ", error);
  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>FirstName:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
          {error.firstName && <span style={spanStyle}>{error.firstName}</span>}
        </div>
        <div>
          <label>LastName:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
          {error.lastName && <span style={spanStyle}>{error.lastName}</span>}
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNum"
            value={mobileNum}
            onChange={handleChange}
          />
          {error.mobileNum && <span style={spanStyle}>{error.mobileNum}</span>}
        </div>
        <div>
          <label>Country Code:</label>
          <select name="countryCode" onChange={handleChange}>
            {countriesCode.map((item, index) => {
              return (
                <option key={index} value={item.number}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {error.countryCode && (
            <span style={spanStyle}>{error.countryCode}</span>
          )}
        </div>
        <input type="submit" />
      </form>
      <h3>
        {Object.keys(submitValue).length > 1 && JSON.stringify(submitValue)}
      </h3>
    </>
  );
}
