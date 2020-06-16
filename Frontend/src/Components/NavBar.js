import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Projects"
    >
      Projects
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Contact"
    >
      Contact
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Work"
    >
      Work
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Photographs"
    >
      Photographs
    </NavLink>
  </nav>
);

export default Navbar;
