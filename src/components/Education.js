import React, { useState } from "react";
import "../styles/GeneralInfo.css";
import uniqid from "uniqid";

const Education = () => {
  const [education, setEducation] = useState({
    title: "",
    date: "",
    school: "",
    highlights: "",
    add: true,
    edit: false,
    key: uniqid(),
  });

  const [educationArr, setEducationArr] = useState([]);

  const edit = (e, key) => {
    e.preventDefault();

    let updatedArr = educationArr.map((edu) => {
      if (edu.key === key) {
        let obj = {
          title: education.title,
          date: education.date,
          school: education.school,
          highlights: education.highlights,
          key: key,
        };
        return obj;
      }
      return edu;
    });

    setEducation({
      title: "",
      date: "",
      school: "",
      highlights: "",
      add: false,
      edit: false,
      key: uniqid(),
    });
    setEducationArr(updatedArr);
  };

  const setAdd = () => {
    setEducation({
      title: "",
      date: "",
      school: "",
      highlights: "",
      add: true,
      edit: false,
      key: uniqid(),
    });
  };

  const add = (e) => {
    e.preventDefault();
    setEducation({ ...education, add: false });

    let obj = {
      title: education.title,
      date: education.date,
      school: education.school,
      highlights: education.highlights,
      key: education.key,
    };
    setEducationArr(educationArr.concat(obj));
  };

  const setEdit = (key) => {
    let [element] = educationArr.filter((edu) => edu.key === key);
    element.add = false;
    element.edit = true;
    setEducation(element);
  };

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const remove = (key) => {
    let updatedArr = educationArr.filter((edu) => edu.key !== key);
    setEducationArr(updatedArr);
  };

  if (education.edit || education.add) {
    return (
      <form
        onSubmit={(e) => {
          education.edit ? edit(e, education.key) : add(e);
        }}
      >
        <div className="input">
          <label htmlFor="title">Degree: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="title"
            id="title"
            value={education.title}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="date">Date: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="date"
            id="date"
            value={education.date}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="school">School: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="school"
            id="school"
            value={education.school}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="highlights">Notes: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="highlights"
            id="highlights"
            value={education.highlights}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    );
  } else {
    return (
      <div>
        {educationArr.map((edu) => {
          return (
            <div key={edu.key}>
              <p>{edu.title}</p>
              <p>{edu.date}</p>
              <p>{edu.school}</p>
              <p>{edu.highlights}</p>
              <button
                onClick={() => {
                  setEdit(edu.key);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  remove(edu.key);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
        <button onClick={setAdd}>Add Education</button>
      </div>
    );
  }
};

export default Education;
