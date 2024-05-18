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

  console.log(activePlayer);
  return (
    <div className="tic-tac-contianer">
      {btn.map((b, i) => {
        const otherPlayer = activePlayer === player.A ? player.B : player.A;

        const currentPlayerTurn = playerTurn[activePlayer];
        const otherPlayerTurn = playerTurn[activePlayer];
        let icon = "";
        if (currentPlayerTurn.join("").includes(String(i))) {
          icon = playerIcon[activePlayer];
        } else if (otherPlayerTurn.join("").includes(String(i))) {
          icon = playerIcon[otherPlayer];
        }
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
