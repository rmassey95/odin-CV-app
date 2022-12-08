import React, { Component } from "react";

class ProfDev extends Component {
  constructor(props) {
    super();
  }

  displayProfDev = (profDevArr, setEdit, handleChange, update, remove) => {
    return (
      <div>
        {profDevArr.map((profDev) => {
          return (
            <div key={profDev.key} className="comp-div">
              {(() => {
                if (profDev.edit) {
                  return (
                    <form
                      onSubmit={(e) => {
                        update(e, "profDev", profDev.key);
                      }}
                    >
                      <input
                        onChange={(e) => {
                          handleChange(e, "profDev");
                        }}
                        defaultValue={profDev.highlights}
                        className="input"
                        placeholder="Highlight"
                        name="highlights"
                      ></input>
                      <button>Submit</button>
                    </form>
                  );
                } else {
                  return (
                    <ul>
                      <li>
                        <p className="highlights">{profDev.highlights}</p>
                        <button
                          onClick={() => {
                            setEdit("profDev", profDev.key);
                          }}
                          className="edit-btn"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            remove("profDev", profDev.key);
                          }}
                        >
                          Remove
                        </button>
                      </li>
                    </ul>
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
          add(e, "profDev");
        }}
      >
        <input
          onChange={(e) => {
            handleChange(e, "profDev");
          }}
          className="input"
          placeholder="Highlight"
          name="highlights"
        ></input>
        <button>Submit</button>
      </form>
    );
  };

  render() {
    const {
      profDev,
      profDevArr,
      setEdit,
      add,
      handleChange,
      setAdd,
      update,
      remove,
    } = this.props;

    return (
      <div className="container">
        <h1>Professional Development</h1>
        {(() => {
          if (profDev.add) {
            return this.displayForm(add, handleChange);
          } else {
            return this.displayProfDev(
              profDevArr,
              setEdit,
              handleChange,
              update,
              remove
            );
          }
        })()}
        <button
          onClick={() => {
            setAdd("profDev");
          }}
        >
          Add Professional Development
        </button>
      </div>
    );
  }
}

export default ProfDev;
