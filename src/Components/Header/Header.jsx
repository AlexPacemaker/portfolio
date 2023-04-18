import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <NavLink to='/'>Портфолио</NavLink>
        <NavLink to='/about'>Обо мне</NavLink>
      </div>
      <hr />
    </>
  );
};

export default Header;
