import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TicTak from "./tic tac toe/TicTak.jsx";
import FormComponent from "./form/Form.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FormComponent /> */}
    <TicTak/>
  </React.StrictMode>
);
