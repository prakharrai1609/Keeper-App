import React from "react";
import { Link } from "react-router-dom";

function Note(props) {
  const handleDelete = async () => {
    props.removeNote(props.name);
    await fetch(`/api/delete/${props.name.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div
      className="card"
      style={{ width: "25%", padding: "1rem", margin: "1rem" }}
    >
      <h5 className="card-title">{props.name.title}</h5>
      <p className="card-text">{props.name.body}</p>
      <Link
        className="btn btn-primary"
        style={{ padding: "2px", margin: "1rem", marginBottom: "8px" }}
        to={`/note/${props.name.id}`}
      >
        Edit
      </Link>
      <button
        className="btn btn-danger"
        style={{ padding: "2px", margin: "1rem", marginTop: "8px" }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
