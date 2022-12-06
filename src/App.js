import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: "",
        address: "",
        phoneNum: "",
        email: "",
        edit: true,
      },
    };
  }

  updateGeneralInfo = (e) => {
    e.preventDefault();
    this.setState({
      generalInfo: {
        name: e.target[0].value,
        address: e.target[1].value,
        phoneNum: e.target[2].value,
        email: e.target[3].value,
        edit: false,
      },
    });
  };

  render() {
    const { generalInfo } = this.state;

    return (
      <div className="App">
        <GeneralInfo
          generalInfo={generalInfo}
          updateGeneralInfo={this.updateGeneralInfo}
        />
      </div>
    );
  }
}

export default App;
