import React, { Component } from "react";
import "../styles/GeneralInfo.css";

class GeneralInfo extends Component {
  constructor(props) {
    super();
  }

  displayForm = (generalInfo, updateGeneralInfo) => {
    return (
      <form
        className="general-info"
        onSubmit={(e) => {
          updateGeneralInfo(e);
        }}
      >
        <input
          className="general-info-input"
          placeholder="Full name"
          defaultValue={generalInfo.name}
          required
          type="text"
        ></input>
        <input
          className="general-info-input"
          placeholder="Address"
          defaultValue={generalInfo.address}
          required
          type="text"
        ></input>
        <input
          className="general-info-input"
          placeholder="Phone Number"
          defaultValue={generalInfo.phoneNum}
          required
          type="tel"
        ></input>
        <input
          className="general-info-input"
          placeholder="Email"
          defaultValue={generalInfo.email}
          required
          type="email"
        ></input>

        <button>Submit</button>
      </form>
    );
  };

  displayOutput = (generalInfo, setEdit) => {
    return (
      <div className="general-info">
        <h1>{generalInfo.name}</h1>
        <p>{generalInfo.address}</p>
        <p>
          {generalInfo.phoneNum} {generalInfo.email}
        </p>
        <button
          className="edit-btn"
          onClick={() => {
            setEdit("generalInfo");
          }}
        >
          Edit
        </button>
      </div>
    );
  };

  render() {
    const { generalInfo, updateGeneralInfo, setEdit } = this.props;

    return (
      <div>
        {(() => {
          if (generalInfo.edit) {
            return this.displayForm(generalInfo, updateGeneralInfo);
          } else {
            return this.displayOutput(generalInfo, setEdit);
          }
        })()}
      </div>
    );
  }
}

export default GeneralInfo;
