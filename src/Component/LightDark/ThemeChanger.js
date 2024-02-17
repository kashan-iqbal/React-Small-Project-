import React from "react";
import useLocalStroage from "./useThemeChanger";
import "./Style.css";

const ThemeChanger = () => {
  const [theme, setTheme] = useLocalStroage("mode", "dark");
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme, "i am theme");
  return (
    <>
      <div className="continer">
        <div className="light-dark-mood" data-theme={theme}>
          <p>ThemeChanger</p>
          <button onClick={handleChangeTheme}> ther change </button>
        </div>
      </div>
    </>
  );
};

export default ThemeChanger;
