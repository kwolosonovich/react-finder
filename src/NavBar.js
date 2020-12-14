import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar({ dogs }) {
  const links = dogs.map((dog) => (
    <NavLink
      key={dog.name}
      to={`/dogs/${dog.name.toLowerCase()}`}
    >
      {dog.name}
    </NavLink>
  ));
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {links}
    </Navbar>
  );
}

export default NavBar;
