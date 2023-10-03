import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App/App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const rootElem = document.getElementById("root");

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  );
}
