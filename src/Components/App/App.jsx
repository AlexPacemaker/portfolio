//импорты необходимых компонентов
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import MainOutlet from "../Outlets/MainOutlet";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import ScrollToTopButton from "../ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      {/* маршрутизация приложения */}
      <Routes>
        <Route path='/' element={<MainOutlet />}>
          <Route path='' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
