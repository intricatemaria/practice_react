// import { StrictMode } from "react";
// import ReactDOM from "react-dom";

// import MainPage from "./main-page/main-page";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <MainPage />
//   </StrictMode>,   
//   rootElement
// );

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "/src/components/app/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);