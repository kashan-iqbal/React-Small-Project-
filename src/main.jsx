import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Para from "./stateManagement/Para.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Para maxChar={49}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat
      quo quidem ratione possimus, voluptate illo laboriosam vitae inventore
      minima neque doloremque voluptatibus vel maxime, voluptatem quasi.
      Voluptatem ipsa, soluta incidunt non id optio temporibus facere harum
      natus esse? Quaerat eveniet doloribus officiis quisquam omnis maxime
      itaque inventore, id repellat esse reiciendis facere ipsa quis!
      Reprehenderit consequatur earum voluptatibus, ipsa similique fugit vero,
      laborum officia autem tenetur est assumenda provident illum! Laudantium
      ipsum harum veniam iusto, amet dolore voluptatem, ipsa nemo, alias sit
      mollitia rem eligendi ipsam vitae dicta rerum.
    </Para>
  </React.StrictMode>
);
