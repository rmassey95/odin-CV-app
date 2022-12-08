import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import "./styles/App.css";
import uniqid from "uniqid";

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
      education: {
        title: "",
        date: "",
        school: "",
        highlights: "",
        add: false,
        edit: false,
        key: uniqid(),
      },
      educationArr: [],
    };
  }

  update = (e, component, key = null) => {
    e.preventDefault();

    if (component === "generalInfo") {
      this.setState({
        generalInfo: {
          name: e.target[0].value,
          address: e.target[1].value,
          phoneNum: e.target[2].value,
          email: e.target[3].value,
          edit: false,
        },
      });
    } else if (component === "education") {
      let eduUpdate = this.state.educationArr.map((edu) => {
        if (edu.key === key) {
          edu.title = e.target[0].value;
          edu.date = e.target[1].value;
          edu.school = e.target[2].value;
          edu.highlights = e.target[3].value;
          edu.add = false;
          edu.edit = false;
        }
        return edu;
      });

      this.setState({
        education: {
          title: "",
          date: "",
          school: "",
          highlights: "",
          add: false,
          edit: false,
          key: uniqid(),
        },
        educationArr: eduUpdate,
      });
    }
  };

  handleChange = (e, component) => {
    if (component === "education") {
      this.setState({
        education: {
          ...this.state.education,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  add = (e, component) => {
    e.preventDefault();

    if (component === "education") {
      let edu = this.state.education;

      this.setState({
        education: {
          title: "",
          date: "",
          school: "",
          highlights: "",
          add: false,
          edit: false,
          key: uniqid(),
        },
        educationArr: this.state.educationArr.concat(edu),
      });
    }
  };

  setEdit = (component, key = null) => {
    if (component === "generalInfo") {
      this.setState({
        generalInfo: {
          ...this.state.generalInfo,
          edit: true,
        },
      });
    } else if (component === "education") {
      let eduUpdate = this.state.educationArr.map((edu) => {
        if (edu.key === key) {
          edu.edit = true;
        }
        return edu;
      });

      this.setState({
        educationArr: eduUpdate,
      });
    }
  };

  setAdd = (component) => {
    if (component === "education") {
      this.setState({
        education: {
          ...this.state.education,
          add: true,
        },
      });
    }
  };

  remove = (component, key) => {
    if (component === "education") {
      let eduUpdate = this.state.educationArr.filter((edu) => edu.key !== key);

      this.setState({
        educationArr: eduUpdate,
      });
    }
  };

  render() {
    const { generalInfo, education, educationArr } = this.state;

    return (
      <div className="App">
        <GeneralInfo
          generalInfo={generalInfo}
          update={this.update}
          setEdit={this.setEdit}
        />
        <Education
          education={education}
          setEdit={this.setEdit}
          educationArr={educationArr}
          add={this.add}
          handleChange={this.handleChange}
          setAdd={this.setAdd}
          update={this.update}
          remove={this.remove}
        />
      </div>
    );
  }
}

export default App;
