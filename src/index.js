import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";
import { BrowserRouter as Router, } from "react-router-dom";
import { createBrowserHistory, createHashHistory } from "history";
//bootstrap

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//styles
import "./Styles/SCSS/App.css";
import "./Styles/css/custom.css";

const customHistory = createBrowserHistory();
// const hashHistory = createHashHistory();  history={customHistory}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//td fix calender
//td downlaod
