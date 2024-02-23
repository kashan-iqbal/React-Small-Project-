import React, { useEffect, useState } from "react";
import "./Style.css";

const TicTakTo = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");
  console.log(square);
  const Square = ({ value, onclick }) => {
    return (
      <button className="square" onClick={onclick}>
        {value}
      </button>
    );
  };
  const handleChange = (val) => {
    let copy = [...square];
    if (getWinner(square) || copy[val] !== "") return;
    copy[val] = isXturn ? "x" : "o";
    setIsXturn(!isXturn);
    setSquare(copy);
    console.log(copy);
  };

  const getWinner = (square) => {
    const winnerPattren = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < winnerPattren.length; index++) {
      const [x, y, z] = winnerPattren[index];
      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    return null;
  };
  useEffect(() => {
    if (getWinner(square)) {
      setStatus(`winner is ${getWinner(square)}`);
    }
  }, [square, isXturn]);

  const reStart = () => {
    setSquare((prev) => prev.map((p) => (p = "")));
    setStatus("");
  };
  return (
    <div className="tic-tac-toe-container">
      {status}
      <p>Now {isXturn ? "x" : "0"}  player Turn</p>
      <div className="row">
        <Square value={square[0]} onclick={() => handleChange(0)} />
        <Square value={square[1]} onclick={() => handleChange(1)} />
        <Square value={square[2]} onclick={() => handleChange(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onclick={() => handleChange(3)} />
        <Square value={square[4]} onclick={() => handleChange(4)} />
        <Square value={square[5]} onclick={() => handleChange(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onclick={() => handleChange(6)} />
        <Square value={square[7]} onclick={() => handleChange(7)} />
        <Square value={square[8]} onclick={() => handleChange(8)} />
      </div>
      {status && <button onClick={reStart}>Restart</button>}
    </div>
  );
};

export default TicTakTo;
