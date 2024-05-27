import React, { useState } from "react";
import "./style.css";

const player = {
  A: 0,
  B: 1,
};
const playerIcon = {
  [player.A]: "X",
  [player.B]: "O",
};

const defaultTurn = {
  [player.A]: [],
  [player.B]: [],
};

const TicTak = () => {
  const [activePlayer, setActivePlayer] = useState(player.A);
  const [playerTurn, setPlayerTurn] = useState(structuredClone(defaultTurn));
  const btn = Array.from(new Array(9));

  const handleturn = (i) => {
    return () => {
      const newPlayer = activePlayer === player.A ? player.B : player.A;
      const oldPlayerTurn = structuredClone(playerTurn);
      oldPlayerTurn[activePlayer].push(String(i));
      setPlayerTurn(oldPlayerTurn);
      setActivePlayer(newPlayer);
    };
  };
const icon = playerIcon[activePlayer]
console.log(playerTurn)
  return (
    <div className="tic-tac-contianer">
      {btn.map((b, i) => {
      
        return (
          <button onClick={handleturn(i)} key={i}>
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default TicTak;
