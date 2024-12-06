import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const NavbarP = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <NavLink class="nav-link" exact to="/"> Home <span class="sr-only">(current)</span></NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" exact to="/Login"> Login </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" exact to="/Regist"> Registration </NavLink>
                            </li>
                        </ul>
                    </div>
        </nav>
  );
};

export default NavbarP
