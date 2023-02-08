import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewNote() {
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [warn, setWarn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (Title.length > 0 && Body.length > 0) {
      await fetch(`/api/create/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: Title, body: Body }),
      });
      navigate("/");
    } else {
      setWarn((warn) => true);
    }
  };

  const resetWarn = () => setWarn((warn) => false);

  return (
    <div className="container">
      <div className="mb-3">
        {warn ? (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Both title and body should be non empty!</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={resetWarn}
            ></button>
          </div>
        ) : (
          ""
        )}

        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          onChange={(e) => {
            setTitle((Title) => e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          placeholder="Write it to remember it 🙂"
          className="form-control"
          id="body"
          rows="3"
          onChange={(e) => {
            setBody((Body) => e.target.value);
          }}
        ></textarea>

        <button onClick={handleSubmit} className="btn btn-primary btn-md my-5">
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateNewNote;
