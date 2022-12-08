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

  handleEduChange = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: e.target.value,
      },
    });
  };

  addEducation = (e) => {
    e.preventDefault();

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
  };

  setEdit = (editPage) => {
    if (editPage === "generalInfo") {
      this.setState({
        generalInfo: {
          ...this.state.generalInfo,
          edit: true,
        },
      });
    }
  };

  setEditEdu = (edukey) => {
    let eduUpdate = this.state.educationArr.map((edu) => {
      if (edu.key === edukey) {
        edu.edit = true;
      }
      return edu;
    });

    this.setState({
      educationArr: eduUpdate,
    });
  };

  setAdd = (addPage) => {
    if (addPage === "education") {
      this.setState({
        education: {
          ...this.state.education,
          add: true,
        },
      });
    }
  };

  updateEducation = (e, eduKey) => {
    e.preventDefault();

    let eduUpdate = this.state.educationArr.map((edu) => {
      if (edu.key === eduKey) {
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
  };

  removeEdu = (eduKey) => {
    let eduUpdate = this.state.educationArr.filter((edu) => edu.key !== eduKey);

    this.setState({
      educationArr: eduUpdate,
    });
  };

  render() {
    const { generalInfo, education, educationArr } = this.state;

    return (
      <div className="App">
        <GeneralInfo
          generalInfo={generalInfo}
          updateGeneralInfo={this.updateGeneralInfo}
          setEdit={this.setEdit}
        />
        <Education
          education={education}
          setEditEdu={this.setEditEdu}
          educationArr={educationArr}
          addEducation={this.addEducation}
          handleEduChange={this.handleEduChange}
          setAdd={this.setAdd}
          updateEducation={this.updateEducation}
          removeEdu={this.removeEdu}
        />
      </div>
    );
  }
}

export default App;
