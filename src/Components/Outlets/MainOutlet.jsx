import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

//определение компонента с аутлетом
const MainOutlet = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainOutlet;
