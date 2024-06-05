import React, { act, useState } from "react";
import "./Tac.css";

const player = {
  A: 0,
  B: 1,
};
const playerIcon = {
  [player.A]: "X",
  [player.B]: "O",
};

const playerTurn = {
  [player.A]: [],
  [player.B]: [],
};
const winPattern = ["012", "345", "678", "036", "147", "258", "048", "246"];

const TicTak = () => {
  const [activePlayer, setActivePlayer] = useState(player.A);
  const [turn, setTurn] = useState(structuredClone(playerTurn));
  const [disable, setDisable] = useState(false);
  const [win, setwin] = useState("");
  const btn = Array.from(new Array(9));

  const handleTurn = (i) => {
    return () => {
      const newTurn = activePlayer === player.A ? player.B : player.A;
      const oldPlayer = structuredClone(turn);
      if (turn[activePlayer].join("").includes(String(i))) {
        return;
      }
      if (turn[newTurn].join("").includes(String(i))) {
        return;
      }

      oldPlayer[activePlayer].push(String(i));
      setTurn(oldPlayer);
      const res = checkingWinningPatern(winPattern, oldPlayer[activePlayer]);
      if (res) {
        setwin(res);
        setDisable(true);
        return
      }
      setActivePlayer(newTurn);
    };
  };

  const checkingWinningPatern = (pattren, arr) => {
    const finalArr = arr.sort().join("");
    for (let i = 0; i < pattren.length; i++) {
      const element = pattren[i];
      console.log(element, finalArr);
      if (element === finalArr) {
        return playerIcon[activePlayer];
      }
    }
  };

  const handleRest=()=>{
    setDisable(false)
    setTurn(playerTurn)
    setActivePlayer(player.A)
    setwin("")
  }

  console.log(win);
  return (
    <div className="tic-tac-contianer">
      {btn.map((b, i) => {
        const otherPlayer = activePlayer === player.A ? player.B : player.A;
        let icon;
        const active = turn[activePlayer];
        const other = turn[otherPlayer];

        if (active.join("").includes(String(i))) {
          icon = playerIcon[activePlayer];
        } else if (other.join("").includes(String(i))) {
          icon = playerIcon[otherPlayer];
        }

        return (
          <button disabled={disable} onClick={handleTurn(i)} key={i}>
            {icon}
          </button>
        );
      })}
      {win && <p>{win} Is The Winner</p>}
      {win && <button onClick={handleRest} >restart Game</button>}
    </div>
  );
};

export default TicTak;
