import React from 'react';
import {Nav, NavLink} from "../../styleComponents/NavbarStyle";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/women'>women</NavLink>
        <NavLink to='/men'>men</NavLink>
        <NavLink to='/kids'>kids</NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
