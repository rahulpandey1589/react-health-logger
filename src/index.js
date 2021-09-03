import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import NavigationComponent from "./NavigationComponent/navigation-header-component";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationComponent />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
