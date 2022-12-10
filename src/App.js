import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProfDev from "./components/ProfDev";
import "./styles/App.css";

function App() {
  return (
    <div>
      <GeneralInfo />
      <h1>Education</h1>
      <Education />
      <h1>Experience</h1>
      <Experience />
      <h1>Professional Development</h1>
      <ProfDev />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       generalInfo: {
//         name: "",
//         address: "",
//         phoneNum: "",
//         email: "",
//         edit: true,
//       },
//       education: {
//         title: "",
//         date: "",
//         school: "",
//         highlights: "",
//         add: false,
//         edit: false,
//         key: uniqid(),
//       },
//       educationArr: [],
//       experience: {
//         title: "",
//         date: "",
//         company: "",
//         highlights: "",
//         add: false,
//         edit: false,
//         key: uniqid(),
//       },
//       experienceArr: [],
//       profDev: {
//         highlights: "",
//         add: false,
//         edit: false,
//         key: uniqid(),
//       },
//       profDevArr: [],
//     };
//   }

//   update = (e, component, key = null) => {
//     e.preventDefault();

//     if (component === "generalInfo") {
//       this.setState({
//         generalInfo: {
//           name: e.target[0].value,
//           address: e.target[1].value,
//           phoneNum: e.target[2].value,
//           email: e.target[3].value,
//           edit: false,
//         },
//       });
//     } else if (component === "education") {
//       let eduUpdate = this.state.educationArr.map((edu) => {
//         if (edu.key === key) {
//           edu.title = e.target[0].value;
//           edu.date = e.target[1].value;
//           edu.school = e.target[2].value;
//           edu.highlights = e.target[3].value;
//           edu.add = false;
//           edu.edit = false;
//         }
//         return edu;
//       });

//       this.setState({
//         education: {
//           title: "",
//           date: "",
//           school: "",
//           highlights: "",
//           add: false,
//           edit: false,
//           key: uniqid(),
//         },
//         educationArr: eduUpdate,
//       });
//     } else if (component === "experience") {
//       let expUpdate = this.state.experienceArr.map((exp) => {
//         if (exp.key === key) {
//           exp.title = e.target[0].value;
//           exp.date = e.target[1].value;
//           exp.company = e.target[2].value;
//           exp.highlights = e.target[3].value;
//           exp.add = false;
//           exp.edit = false;
//         }
//         return exp;
//       });

//       this.setState({
//         experience: {
//           title: "",
//           date: "",
//           company: "",
//           highlights: "",
//           add: false,
//           edit: false,
//           key: uniqid(),
//         },
//         experienceArr: expUpdate,
//       });
//     } else if (component === "profDev") {
//       let profDevUpdate = this.state.profDevArr.map((profDev) => {
//         if (profDev.key === key) {
//           profDev.highlights = e.target[0].value;
//           profDev.add = false;
//           profDev.edit = false;
//         }
//         return profDev;
//       });

//       this.setState({
//         profDev: {
//           highlights: "",
//           add: false,
//           edit: false,
//           key: uniqid(),
//         },
//         profDevArr: profDevUpdate,
//       });
//     }
//   };

//   handleChange = (e, component) => {
//     if (component === "education") {
//       this.setState({
//         education: {
//           ...this.state.education,
//           [e.target.name]: e.target.value,
//         },
//       });
//     } else if (component === "experience") {
//       this.setState({
//         experience: {
//           ...this.state.experience,
//           [e.target.name]: e.target.value,
//         },
//       });
//     } else if (component === "profDev") {
//       this.setState({
//         profDev: {
//           ...this.state.profDev,
//           [e.target.name]: e.target.value,
//         },
//       });
//     }
//   };

//   add = (e, component) => {
//     e.preventDefault();

//     if (component === "education") {
//       let edu = this.state.education;

//       this.setState({
//         education: {
//           title: "",
//           date: "",
//           school: "",
//           highlights: "",
//           add: false,
//           edit: false,
//           key: uniqid(),
//         },
//         educationArr: this.state.educationArr.concat(edu),
//       });
//     } else if (component === "experience") {
//       let exp = this.state.experience;

//       this.setState({
//         experience: {
//           title: "",
//           date: "",
//           company: "",
//           highlights: "",
//           add: false,
//           edit: false,
//           key: uniqid(),
//         },
//         experienceArr: this.state.experienceArr.concat(exp),
//       });
//     } else if (component === "profDev") {
//       let profDev = this.state.profDev;

//       this.setState({
//         profDev: {
//           highlights: "",
//           add: false,
//           edit: false,
//           key: uniqid(),
//         },
//         profDevArr: this.state.profDevArr.concat(profDev),
//       });
//     }
//   };

//   setEdit = (component, key = null) => {
//     if (component === "generalInfo") {
//       this.setState({
//         generalInfo: {
//           ...this.state.generalInfo,
//           edit: true,
//         },
//       });
//     } else if (component === "education") {
//       let eduUpdate = this.state.educationArr.map((edu) => {
//         if (edu.key === key) {
//           edu.edit = true;
//         }
//         return edu;
//       });

//       this.setState({
//         educationArr: eduUpdate,
//       });
//     } else if (component === "experience") {
//       let expUpdate = this.state.experienceArr.map((exp) => {
//         if (exp.key === key) {
//           exp.edit = true;
//         }
//         return exp;
//       });

//       this.setState({
//         experienceArr: expUpdate,
//       });
//     } else if (component === "profDev") {
//       let profDevUpdate = this.state.profDevArr.map((profDev) => {
//         if (profDev.key === key) {
//           profDev.edit = true;
//         }
//         return profDev;
//       });

//       this.setState({
//         profDevArr: profDevUpdate,
//       });
//     }
//   };

//   setAdd = (component) => {
//     if (component === "education") {
//       this.setState({
//         education: {
//           ...this.state.education,
//           add: true,
//         },
//       });
//     } else if (component === "experience") {
//       this.setState({
//         experience: {
//           ...this.state.experience,
//           add: true,
//         },
//       });
//     } else if (component === "profDev") {
//       this.setState({
//         profDev: {
//           ...this.state.profDev,
//           add: true,
//         },
//       });
//     }
//   };

//   remove = (component, key) => {
//     if (component === "education") {
//       let eduUpdate = this.state.educationArr.filter((edu) => edu.key !== key);

//       this.setState({
//         educationArr: eduUpdate,
//       });
//     } else if (component === "experience") {
//       let expUpdate = this.state.experienceArr.filter((exp) => exp.key !== key);

//       this.setState({
//         experienceArr: expUpdate,
//       });
//     } else if (component === "profDev") {
//       let profDevUpdate = this.state.profDevArr.filter(
//         (profDev) => profDev.key !== key
//       );

//       this.setState({
//         profDevArr: profDevUpdate,
//       });
//     }
//   };

//   render() {
//     const {
//       generalInfo,
//       education,
//       educationArr,
//       experience,
//       experienceArr,
//       profDev,
//       profDevArr,
//     } = this.state;

//     return (
//       <div className="App">
//         <GeneralInfo
//           generalInfo={generalInfo}
//           update={this.update}
//           setEdit={this.setEdit}
//         />
//         <Education
//           education={education}
//           setEdit={this.setEdit}
//           educationArr={educationArr}
//           add={this.add}
//           handleChange={this.handleChange}
//           setAdd={this.setAdd}
//           update={this.update}
//           remove={this.remove}
//         />
//         <Experience
//           experience={experience}
//           experienceArr={experienceArr}
//           setEdit={this.setEdit}
//           add={this.add}
//           handleChange={this.handleChange}
//           setAdd={this.setAdd}
//           update={this.update}
//           remove={this.remove}
//         />
//         <ProfDev
//           profDev={profDev}
//           profDevArr={profDevArr}
//           setEdit={this.setEdit}
//           add={this.add}
//           handleChange={this.handleChange}
//           setAdd={this.setAdd}
//           update={this.update}
//           remove={this.remove}
//         />
//       </div>
//     );
//   }
// }

export default App;
