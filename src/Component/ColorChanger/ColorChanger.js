import {useEffect ,useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("RGB");
  const [color, setColor] = useState("#000000");

  const randomcolorGenerator = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreatHex = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let index = 0; index < 6; index++) {
      hexColor += hex[randomcolorGenerator(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRgb = () => {
    const r = randomcolorGenerator(256)
    const g = randomcolorGenerator(256)
    const b = randomcolorGenerator(256)

    // console.log(r,g,b)
    setColor(`rgb(${r},${g}, ${b})`)
  };

  console.log(color)

useEffect(()=>{
    if(typeOfColor === "HEX" ) handleCreatHex() 
    else handleCreateRgb()

},[typeOfColor])
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("HEX")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("RGB")}>Create RGB Color</button>
      <button
        onClick={typeOfColor === "HEX" ? handleCreatHex : handleCreateRgb}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>{typeOfColor}</h1>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
