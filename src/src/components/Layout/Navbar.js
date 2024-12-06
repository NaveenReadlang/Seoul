import React from "react"
import {Link, NavLink} from "react-router-dom"

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="ture" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-items">
              <NavLink className="nav-link" aria-current="page" exact to="/login">
                {props.title}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/analytics_dashboard">
                Analytics Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Edit Text
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled/>
          </div>
        </div>
        <Link className="btn btn-outline-light" exact to="/user/add"> 
          Add User
        </Link>
      </nav>
    )
};
export default Navbar;