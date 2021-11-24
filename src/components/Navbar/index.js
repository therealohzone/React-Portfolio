import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to='/portfolio'>Portfolio</Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://www.linkedin.com/in/john-oh-2ab104215/" target="blank">My LinkedIn</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
)
}

export default Navbar;