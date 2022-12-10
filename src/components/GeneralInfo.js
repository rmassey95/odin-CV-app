import React, { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    address: "",
    phoneNum: "",
    email: "",
    edit: true,
  });

  function update(e) {
    e.preventDefault();
    setGeneralInfo({ ...generalInfo, edit: false });
  }

  function handleChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  }

  function setEdit() {
    setGeneralInfo({ ...generalInfo, edit: true });
  }

  if (generalInfo.edit) {
    //display form
    return (
      <form
        onSubmit={(e) => {
          update(e);
        }}
      >
        <div className="input">
          <label htmlFor="name">Full Name: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={generalInfo.name}
            id="name"
            name="name"
          ></input>
        </div>
        <div className="input">
          <label htmlFor="address">Address: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={generalInfo.address}
            id="address"
            name="address"
          ></input>
        </div>
        <div className="input">
          <label htmlFor="phoneNum">Phone Number: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={generalInfo.phoneNum}
            id="phoneNum"
            name="phoneNum"
          ></input>
        </div>
        <div className="input">
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={generalInfo.email}
            id="email"
            name="email"
          ></input>
        </div>
        <button>Submit</button>
      </form>
    );
  }
  //display info
  return (
    <div>
      <p>{generalInfo.name}</p>
      <p>{generalInfo.address}</p>
      <p>{generalInfo.phoneNum}</p>
      <p>{generalInfo.email}</p>
      <button onClick={setEdit}>Edit</button>
    </div>
  );
}

export default GeneralInfo;
