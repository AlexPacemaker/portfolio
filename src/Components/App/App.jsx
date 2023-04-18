import styles from "./App.module.scss";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import MainOutlet from "../Outlets/MainOutlet";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<MainOutlet />}>
          <Route path='' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
