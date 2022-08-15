import React, { useState, useEffect } from "react";
import "../styles/index.scss";

function TicTacToe() {
  const [joueurToPlay, setJoueurToPlay] = useState("j1");
  const [winner, setWinner] = useState("Partie en cours...");
  const [j1win, setj1win] = useState(0);
  const [j2win, setj2win] = useState(0);
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [item4, setItem4] = useState("");
  const [item5, setItem5] = useState("");
  const [item6, setItem6] = useState("");
  const [item7, setItem7] = useState("");
  const [item8, setItem8] = useState("");
  const [item9, setItem9] = useState("");

  useEffect(() => {
    if (String(isWin()).includes("case")) {
      if (joueurToPlay === "j1") setWinner("J2 a gagné la partie !");
      if (joueurToPlay === "j2") setWinner("J1 a gagné la partie !");
    }
    if (String(isWin()).includes("null")) setWinner("Match null !");
  }, [joueurToPlay, isWin]);

  useEffect(() => {
    if (winner === "J1 a gagné la partie !") setj1win(j1win + 1);
    if (winner === "J2 a gagné la partie !") setj2win(j2win + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

  function reset() {
    setItem1("");
    setItem2("");
    setItem3("");
    setItem4("");
    setItem5("");
    setItem6("");
    setItem7("");
    setItem8("");
    setItem9("");
  }

  function restartGame() {
    reset();
    setWinner("Partie en cours...");
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function isWin() {
    if (
      item1 !== "" &&
      item2 !== "" &&
      item3 !== "" &&
      item4 !== "" &&
      item5 !== "" &&
      item6 !== "" &&
      item7 !== "" &&
      item8 !== "" &&
      item9 !== ""
    )
      return "null";

    if (item1 === item2 && item2 === item3 && item1 !== "") return "case1";
    if (item4 === item5 && item5 === item6 && item4 !== "") return "case2";
    if (item7 === item8 && item8 === item9 && item7 !== "") return "case3";
    if (item1 === item4 && item4 === item7 && item4 !== "") return "case4";
    if (item2 === item5 && item5 === item8 && item2 !== "") return "case5";
    if (item3 === item6 && item6 === item9 && item3 !== "") return "case6";
    if (item1 === item5 && item5 === item9 && item5 !== "") return "case7";
    if (item3 === item5 && item5 === item7 && item5 !== "") return "case8";
    else return;
  }

  function play(joueurToPlay) {
    if (joueurToPlay === "j1") {
      setJoueurToPlay("j2");
      return "O";
    }
    if (joueurToPlay === "j2") {
      setJoueurToPlay("j1");
      return "X";
    }
  }

  return (
    <div className="container">
      <div className="grid">
        <button
          className={
            String(isWin()) === "case1" ||
            String(isWin()) === "case4" ||
            String(isWin()) === "case7"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item1 === "") {
                setItem1(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else {
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
            }
          }}
        >
          {item1}
        </button>

        <button
          className={
            String(isWin()) === "case1" || String(isWin()) === "case5"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item2 === "") {
                setItem2(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
          }}
        >
          {item2}
        </button>

        <button
          className={
            String(isWin()) === "case1" ||
            String(isWin()) === "case6" ||
            String(isWin()) === "case8"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item3 === "") {
                setItem3(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
          }}
        >
          {item3}
        </button>

        <button
          className={
            String(isWin()) === "case2" || String(isWin()) === "case4"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item4 === "") {
                setItem4(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
          }}
        >
          {item4}
        </button>

        <button
          className={
            String(isWin()) === "case2" ||
            String(isWin()) === "case5" ||
            String(isWin()) === "case8" ||
            String(isWin()) === "case7"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item5 === "") {
                setItem5(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
          }}
        >
          {item5}
        </button>

        <button
          className={
            String(isWin()) === "case2" || String(isWin()) === "case6"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item6 === "") {
                setItem6(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
          }}
        >
          {item6}
        </button>

        <button
          className={
            String(isWin()) === "case3" ||
            String(isWin()) === "case4" ||
            String(isWin()) === "case8"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item7 === "") {
                setItem7(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
          }}
        >
          {item7}
        </button>

        <button
          className={
            String(isWin()) === "case3" || String(isWin()) === "case5"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item8 === "") {
                setItem8(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
          }}
        >
          {item8}
        </button>

        <button
          className={
            String(isWin()) === "case3" ||
            String(isWin()) === "case6" ||
            String(isWin()) === "case7"
              ? "square win"
              : "square"
          }
          onClick={() => {
            if (!String(isWin()).includes("case")) {
              if (item9 === "") {
                setItem9(play(joueurToPlay));
              } else console.log("Case déjà joué !");
            } else
              return console.log(
                "La partie est terminé, vous ne pouvez pas rejouer !"
              );
          }}
        >
          {item9}
        </button>
      </div>
      <div className="information">
        <button className="rejouer" onClick={() => restartGame()}>
          rejouer
        </button>
        <span className="playerturn">
          {"Au tour de : " + String(joueurToPlay).toUpperCase()}
        </span>
        <span className="nbrwinj1">{"Partie gagné par J1 : " + j1win}</span>
        <span className="nbrwinj2">{"Partie gagné par J2 : " + j2win}</span>
        <span className="winneris">{winner}</span>
      </div>
    </div>
  );
}

export default TicTacToe;
