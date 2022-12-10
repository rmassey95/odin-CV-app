import React, { useState } from "react";
import "../styles/GeneralInfo.css";
import uniqid from "uniqid";

function ProfDev() {
  const [profDev, setProfDev] = useState({
    note: "",
    id: uniqid(),
    add: true,
    edit: false,
  });
  const [profDevArr, setProfDevArr] = useState([]);

  const handleChange = (e) => {
    setProfDev({ ...profDev, note: e.target.value });
  };

  const add = (e) => {
    e.preventDefault();

    let obj = { note: profDev.note, id: profDev.id };
    setProfDevArr(profDevArr.concat(obj));
    setProfDev({ note: "", id: uniqid(), add: false, edit: false });
  };

  const setEdit = (id) => {
    let [obj] = profDevArr.filter((profDevNote) => profDevNote.id === id);
    setProfDev({ note: obj.note, id: id, add: false, edit: true });
  };

  const edit = (e, id) => {
    e.preventDefault();

    let updateArr = profDevArr.map((profDevNote) => {
      if (profDevNote.id === id) {
        let obj = { note: profDev.note, id: id };
        return obj;
      }
      return profDevNote;
    });

    setProfDevArr(updateArr);
    setProfDev({ note: "", id: uniqid(), add: false, edit: false });
  };

  const setAdd = () => {
    setProfDev({ ...profDev, add: true });
  };

  const remove = (id) => {
    let updateArr = profDevArr.filter((profDev) => profDev.id !== id);

    setProfDevArr(updateArr);
  };

  if (profDev.add || profDev.edit) {
    return (
      <form
        onSubmit={(e) => {
          profDev.edit ? edit(e, profDev.id) : add(e);
        }}
      >
        <label htmlFor="note">Note: </label>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          id="note"
          name="note"
          value={profDev.note}
        ></input>
        <button>Submit</button>
      </form>
    );
  }
  return (
    <div>
      {profDevArr.map((profDevNote) => {
        return (
          <div key={profDevNote.id}>
            <p>{profDevNote.note}</p>
            <button
              onClick={() => {
                setEdit(profDevNote.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                remove(profDevNote.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button onClick={setAdd}>Add Professional Development</button>
    </div>
  );
}

export default ProfDev;
