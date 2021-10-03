import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import NavigationComponent from "./NavigationComponent/navigation-header-component";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Store/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <NavigationComponent />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
