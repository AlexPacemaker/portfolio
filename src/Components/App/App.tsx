//импорты необходимых компонентов
import React from "react";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import MainOutlet from "../Outlets/MainOutlet";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";

const App = (): JSX.Element => {
  return (
    <div>
      {/* маршрутизация приложения */}
      <Routes>
        <Route path='/' element={<MainOutlet />}>
          <Route path='' element={<About />} />
          <Route path='/portfolio' element={<Main />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
