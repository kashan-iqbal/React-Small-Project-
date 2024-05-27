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

const winingPattern = ["012", "345", "678", "036", "147", "258", "048", "246"];

const TicTak = () => {
  const [activePlayer, setActivePlayer] = useState(player.A);
  const [playerTurn, setPlayerTurn] = useState(structuredClone(defaultTurn));
  const [msg, setMsg] = useState("");
  const btn = Array.from(new Array(9));

  const handleturn = (i) => {
    return () => {
      const newPlayer = activePlayer === player.A ? player.B : player.A;
      const oldPlayer = structuredClone(playerTurn);

      if (playerTurn[player.A].join("").includes(String(i))) {
        return;
      }
      if (playerTurn[player.B].join("").includes(String(i))) {
        return;
      }
      oldPlayer[activePlayer].push(String(i));
      setPlayerTurn(oldPlayer);

      const res = checkWinner(winingPattern, oldPlayer[activePlayer]);
      if (res) {
        setMsg(`winner pLayer is${res}`);
        return;
      }

      setActivePlayer(newPlayer);
    };
  };

  function checkWinner(winingPattern, arr) {
    const finalArr = arr.sort().join("");

    const res = winingPattern.some((t) => strickChecking(t, finalArr));
    if (res) {
      return playerIcon[activePlayer];
    }
    console.log(res);
  }

  function strickChecking(t, finalArr) {
    return t.split("").every((p) => finalArr.includes(p));
  }

  const handleReset = () => {
    setMsg("");
    setPlayerTurn(defaultTurn);
    setActivePlayer(player.A);
  };

  const icon = playerIcon[activePlayer];
  console.log(playerTurn);
  return (
    <div className="tic-tac-contianer">
      {btn.map((b, i) => {
        let otherPlayer = activePlayer === player.A ? player.B : player.A;
        const currentPlayerTurns = playerTurn[activePlayer];
        const previousPlayer = playerTurn[otherPlayer];
        let icon = "";
        if (currentPlayerTurns.join("").includes(String(i))) {
          icon = playerIcon[activePlayer];
        } else if (previousPlayer.join("").includes(String(i))) {
          icon = playerIcon[otherPlayer];
        }

        return (
          <button onClick={handleturn(i)} key={i}>
            {icon}
          </button>
        );
      })}
      {msg && (
        <>
          <p>{msg} </p> <button onClick={handleReset}>restart Game</button>
        </>
      )}
    </div>
  );
};

export default TicTak;
