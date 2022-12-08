import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super();
  }

  displayForm = (add, handleChange) => {
    return (
      <form
        onSubmit={(e) => {
          add(e, "education");
        }}
      >
        <input
          onChange={(e) => {
            handleChange(e, "education");
          }}
          className="input"
          placeholder="Title"
          name="title"
        ></input>
        <input
          onChange={(e) => {
            handleChange(e, "education");
          }}
          className="input"
          placeholder="Date"
          name="date"
        ></input>
        <input
          onChange={(e) => {
            handleChange(e, "education");
          }}
          className="input"
          placeholder="School"
          name="school"
        ></input>
        <textarea
          onChange={(e) => {
            handleChange(e, "education");
          }}
          className="input textarea"
          placeholder="Notes"
          name="highlights"
        ></textarea>
        <button>Submit</button>
      </form>
    );
  };

  displayEducation = (educationArr, setEdit, handleChange, update, remove) => {
    return (
      <div>
        {educationArr.map((education) => {
          return (
            <div key={education.key} className="edu-div">
              {(() => {
                if (education.edit) {
                  return (
                    <form
                      onSubmit={(e) => {
                        update(e, "education", education.key);
                      }}
                    >
                      <input
                        onChange={(e) => {
                          handleChange(e, "education");
                        }}
                        defaultValue={education.title}
                        className="input"
                        placeholder="Title"
                        name="title"
                      ></input>
                      <input
                        onChange={(e) => {
                          handleChange(e, "education");
                        }}
                        defaultValue={education.date}
                        className="input"
                        placeholder="Date"
                        name="date"
                      ></input>
                      <input
                        onChange={(e) => {
                          handleChange(e, "education");
                        }}
                        defaultValue={education.school}
                        className="input"
                        placeholder="School"
                        name="school"
                      ></input>
                      <textarea
                        onChange={(e) => {
                          handleChange(e, "education");
                        }}
                        defaultValue={education.highlights}
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
                        <h1>{education.title}</h1>
                        <p>{education.date}</p>
                      </div>
                      <p className="edu-school">{education.school}</p>
                      <p className="edu-highlights">{education.highlights}</p>
                      <button
                        onClick={() => {
                          setEdit("education", education.key);
                        }}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          remove("education", education.key);
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

  render() {
    const {
      education,
      setEdit,
      educationArr,
      add,
      handleChange,
      setAdd,
      update,
      remove,
    } = this.props;

    return (
      <div className="education-container">
        <h1>Education</h1>
        {(() => {
          if (education.add) {
            return this.displayForm(add, handleChange);
          } else {
            return this.displayEducation(
              educationArr,
              setEdit,
              handleChange,
              update,
              remove
            );
          }
        })()}
        <button
          onClick={() => {
            setAdd("education");
          }}
        >
          Add Education
        </button>
      </div>
    );
  }
}

export default Education;
