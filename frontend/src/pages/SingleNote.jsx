import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SingleNote(props) {
  const search = useLocation();
  const urlPath = search.pathname;

  const [note, setNote] = useState();
  let navigate = useNavigate();

  const getNote = async () => {
    const resposne = await fetch(`/api${urlPath}`);
    const data = await resposne.json();
    setNote(data);
  };

  useEffect(() => {
    getNote();
  }, []);

  const handleSubmit = async () => {
    await fetch(`/api/update/${note.id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  return (
    <div className="container jumbotron">
      <h1 className="display-4">{note?.title}</h1>
      <p className="lead">Note body :</p>
      <textarea
        style={{
          backgroundColor: "#d1d1d1",
          border: 0,
          display: "block",
          margin: "2rem",
          marginLeft: "0",
          width: "50%",
          height: "20rem",
        }}
        defaultValue={note?.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
      ></textarea>
      <button onClick={handleSubmit} className="btn btn-success">
        Save and go back
      </button>
      <Link
        style={{ marginLeft: "1rem" }}
        to={"/"}
        className="btn btn-secondary"
      >
        Cancel
      </Link>
    </div>
  );
}

export default SingleNote;
