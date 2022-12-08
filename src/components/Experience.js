import React, { Component } from "react";
import "../styles/edu-exp.css";

class Experience extends Component {
  constructor(props) {
    super();
  }

  displayExperience = (
    experienceArr,
    setEdit,
    handleChange,
    update,
    remove
  ) => {
    return (
      <div>
        {experienceArr.map((exp) => {
          return (
            <div key={exp.key} className="comp-div">
              {(() => {
                if (exp.edit) {
                  return (
                    <form
                      onSubmit={(e) => {
                        update(e, "experience", exp.key);
                      }}
                    >
                      <input
                        onChange={(e) => {
                          handleChange(e, "experience");
                        }}
                        defaultValue={exp.title}
                        className="input"
                        placeholder="Title"
                        name="title"
                      ></input>
                      <input
                        onChange={(e) => {
                          handleChange(e, "experience");
                        }}
                        defaultValue={exp.date}
                        className="input"
                        placeholder="Date"
                        name="date"
                      ></input>
                      <input
                        onChange={(e) => {
                          handleChange(e, "experience");
                        }}
                        defaultValue={exp.company}
                        className="input"
                        placeholder="Company"
                        name="company"
                      ></input>
                      <textarea
                        onChange={(e) => {
                          handleChange(e, "experience");
                        }}
                        defaultValue={exp.highlights}
                        className="input textarea"
                        placeholder="Notes"
                        name="highlights"
                      ></textarea>
                      <button>Submit</button>
                    </form>
                  );
                } else {
                  return (
                    <div>
                      <div className="title-date">
                        <h1>{exp.title}</h1>
                        <p>{exp.date}</p>
                      </div>
                      <p className="org">{exp.company}</p>
                      <p className="highlights">{exp.highlights}</p>
                      <button
                        onClick={() => {
                          setEdit("experience", exp.key);
                        }}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          remove("experience", exp.key);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  );
                }
              })()}
            </div>
          );
        })}
      </div>
    );
  };

  displayForm = (add, handleChange) => {
    return (
      <form
        onSubmit={(e) => {
          add(e, "experience");
        }}
      >
        <input
          onChange={(e) => {
            handleChange(e, "experience");
          }}
          className="input"
          placeholder="Title"
          name="title"
        ></input>
        <input
          onChange={(e) => {
            handleChange(e, "experience");
          }}
          className="input"
          placeholder="Date"
          name="date"
        ></input>
        <input
          onChange={(e) => {
            handleChange(e, "experience");
          }}
          className="input"
          placeholder="Company"
          name="company"
        ></input>
        <textarea
          onChange={(e) => {
            handleChange(e, "experience");
          }}
          className="input textarea"
          placeholder="Notes"
          name="highlights"
        ></textarea>
        <button>Submit</button>
      </form>
    );
  };

  render() {
    const {
      experience,
      experienceArr,
      setEdit,
      add,
      handleChange,
      setAdd,
      update,
      remove,
    } = this.props;
    return (
      <div className="container">
        <h1>Experience</h1>
        {(() => {
          if (experience.add) {
            return this.displayForm(add, handleChange);
          } else {
            return this.displayExperience(
              experienceArr,
              setEdit,
              handleChange,
              update,
              remove
            );
          }
        })()}
        <button
          onClick={() => {
            setAdd("experience");
          }}
        >
          Add Experience
        </button>
      </div>
    );
  }
}

export default Experience;
