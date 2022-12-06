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
        <input className="general-info-input" placeholder="Full Name"></input>
        <input className="general-info-input" placeholder="Address"></input>
        <input
          className="general-info-input"
          placeholder="Phone Number"
        ></input>
        <input className="general-info-input" placeholder="Email"></input>

        <button>Submit</button>
      </form>
    );
  };

  displayOutput = (generalInfo) => {
    return (
      <div className="general-info">
        <h1>{generalInfo.name}</h1>
        <p>{generalInfo.address}</p>
        <p>
          {generalInfo.phoneNum} {generalInfo.email}
        </p>
      </div>
    );
  };

  render() {
    const { generalInfo, updateGeneralInfo } = this.props;

    return (
      <div>
        {(() => {
          if (generalInfo.edit) {
            return this.displayForm(generalInfo, updateGeneralInfo);
          } else {
            return this.displayOutput(generalInfo);
          }
        })()}
      </div>
    );
  }
}

export default GeneralInfo;
