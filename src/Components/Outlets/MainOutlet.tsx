import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

//определение компонента с аутлетом
const MainOutlet: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainOutlet;
