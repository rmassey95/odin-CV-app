import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super();
  }

  displayForm = (addEducation, handleEduChange, education) => {
    return (
      <form
        onSubmit={(e) => {
          addEducation(e);
        }}
      >
        <input
          onChange={(e) => {
            handleEduChange(e);
          }}
          className="input"
          placeholder="Title"
          name="title"
        ></input>
        <input
          onChange={(e) => {
            handleEduChange(e);
          }}
          className="input"
          placeholder="Date"
          name="date"
        ></input>
        <input
          onChange={(e) => {
            handleEduChange(e);
          }}
          className="input"
          placeholder="School"
          name="school"
        ></input>
        <textarea
          onChange={(e) => {
            handleEduChange(e);
          }}
          className="input textarea"
          placeholder="Notes"
          name="highlights"
        ></textarea>
        <button>Submit</button>
      </form>
    );
  };

  displayEducation = (
    educationArr,
    setEditEdu,
    handleEduChange,
    updateEducation,
    removeEdu
  ) => {
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
                        updateEducation(e, education.key);
                      }}
                    >
                      <input
                        onChange={(e) => {
                          handleEduChange(e);
                        }}
                        defaultValue={education.title}
                        className="input"
                        placeholder="Title"
                        name="title"
                      ></input>
                      <input
                        onChange={(e) => {
                          handleEduChange(e);
                        }}
                        defaultValue={education.date}
                        className="input"
                        placeholder="Date"
                        name="date"
                      ></input>
                      <input
                        onChange={(e) => {
                          handleEduChange(e);
                        }}
                        defaultValue={education.school}
                        className="input"
                        placeholder="School"
                        name="school"
                      ></input>
                      <textarea
                        onChange={(e) => {
                          handleEduChange(e);
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
                          setEditEdu(education.key);
                        }}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          removeEdu(education.key);
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
      setEditEdu,
      educationArr,
      addEducation,
      handleEduChange,
      setAdd,
      updateEducation,
      removeEdu,
    } = this.props;

    return (
      <div className="education-container">
        <h1>Education</h1>
        {(() => {
          if (education.add) {
            return this.displayForm(
              addEducation,
              handleEduChange,
              educationArr
            );
          } else {
            return this.displayEducation(
              educationArr,
              setEditEdu,
              handleEduChange,
              updateEducation,
              removeEdu
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
