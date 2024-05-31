import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ChakraProvider,
  ColorModeScript,
  ThemeProvider,
} from "@chakra-ui/react";
import theme from "./theme/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
