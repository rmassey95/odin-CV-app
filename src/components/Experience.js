import React, { useState } from "react";
import "../styles/GeneralInfo.css";
import uniqid from "uniqid";

const Experience = () => {
  const [experience, setExperience] = useState({
    title: "",
    date: "",
    comp: "",
    highlights: "",
    add: true,
    edit: false,
    key: uniqid(),
  });

  const [experienceArr, setExperienceArr] = useState([]);

  const edit = (e, key) => {
    e.preventDefault();

    let updatedArr = experienceArr.map((exp) => {
      if (exp.key === key) {
        let obj = {
          title: experience.title,
          date: experience.date,
          comp: experience.comp,
          highlights: experience.highlights,
          key: key,
        };
        return obj;
      }
      return exp;
    });

    setExperience({
      title: "",
      date: "",
      comp: "",
      highlights: "",
      add: false,
      edit: false,
      key: uniqid(),
    });
    setExperienceArr(updatedArr);
  };

  const setAdd = () => {
    setExperience({
      title: "",
      date: "",
      comp: "",
      highlights: "",
      add: true,
      edit: false,
      key: uniqid(),
    });
  };

  const add = (e) => {
    e.preventDefault();
    setExperience({ ...experience, add: false });

    let obj = {
      title: experience.title,
      date: experience.date,
      comp: experience.comp,
      highlights: experience.highlights,
      key: experience.key,
    };
    setExperienceArr(experienceArr.concat(obj));
  };

  const setEdit = (key) => {
    let [element] = experienceArr.filter((exp) => exp.key === key);
    element.add = false;
    element.edit = true;
    setExperience(element);
  };

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const remove = (key) => {
    let updatedArr = experienceArr.filter((exp) => exp.key !== key);
    setExperienceArr(updatedArr);
  };

  if (experience.edit || experience.add) {
    return (
      <form
        onSubmit={(e) => {
          experience.edit ? edit(e, experience.key) : add(e);
        }}
      >
        <div className="input">
          <label htmlFor="title">Job Title: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="title"
            id="title"
            value={experience.title}
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
            value={experience.date}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="comp">Company: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="comp"
            id="comp"
            value={experience.comp}
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
            value={experience.highlights}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    );
  } else {
    return (
      <div>
        {experienceArr.map((exp) => {
          return (
            <div key={exp.key}>
              <p>{exp.title}</p>
              <p>{exp.date}</p>
              <p>{exp.comp}</p>
              <p>{exp.highlights}</p>
              <button
                onClick={() => {
                  setEdit(exp.key);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  remove(exp.key);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
        <button onClick={setAdd}>Add Experience</button>
      </div>
    );
  }
};

export default Experience;
