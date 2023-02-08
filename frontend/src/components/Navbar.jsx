import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          React | Django tutorial
        </Link>
        <Link to={`/create/`} className="btn btn-dark">
          Create new note
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
