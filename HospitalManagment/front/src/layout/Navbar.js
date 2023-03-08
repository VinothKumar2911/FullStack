import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "./layout/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Hospital DataBase 
          

      </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           
           <Link  to="https://www.apollohospitals.com/" className="navbar-toggler-icon"></Link>
     
          </button>

          <Link className="btn btn-outline-light" to="/adduser">
            Add Patients
          </Link>
        </div>
      </nav>
    </div>
  );
}