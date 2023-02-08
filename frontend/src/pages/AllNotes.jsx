import React, { useState, useEffect } from "react";
import Note from "../components/Note";

function AllNotes() {
  let [notes, setNotes] = useState([]);

  const getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();

    setNotes([...data]);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const removeNote = (note) => {
    setNotes((notes) => notes.filter((e) => e !== note));
  };

  return (
    <div className="row">
      {notes.map((note, idx) => {
        return (
          <Note
            className="col-lg-2 col-md-auto"
            name={note}
            removeNote={removeNote}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default AllNotes;
