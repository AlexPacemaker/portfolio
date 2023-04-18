import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to='/'>Портфолио</NavLink>
      <NavLink to='/about'>Обо мне</NavLink>
    </div>
  );
};

export default Header;
