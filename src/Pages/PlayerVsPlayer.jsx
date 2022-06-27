import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "../Components/Box";
import Button from "../Components/Button";
import Headline from "../Components/Headline";
import { checkWinner } from "../HelperFunc";
import { Xmove, Omove, Reset, Home } from "../Redux/Redux";
import "./PlayerVsPlayer.scss";

export default function PlayerVsPlayer() {
  const gameState = useSelector((state) => state.board);
  const [Msg, setMsg] = useState("");
  const [moveCount, setMoveCount] = useState(0);
  const [isXplayer, setXplayer] = useState(false);
  const [winner, setWinner] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setWinner(checkWinner(gameState));
    isXplayer ? setMsg("Player X turn") : setMsg("Player O turn");

    //winning case
    if (winner) {
      setMsg("Player " + winner + " won!");

      document.getElementById("game").classList.add("disable");
      document.getElementById("reset").classList.add("highlight");
      document.getElementById("gameHeadline").classList.add("highlight");
    }
    //draw case
    else if (moveCount === 9 && !winner) {
      setMsg("Match Draw!");

      document.getElementById("game").classList.add("disable");
      document.getElementById("reset").classList.add("highlight");
      document.getElementById("gameHeadline").classList.add("highlight");
    } else {
      document.getElementById("reset").classList.remove("highlight");
      document.getElementById("game").classList.remove("disable");
      document.getElementById("gameHeadline").classList.remove("highlight");
    }
  }, [gameState, Msg, isXplayer, winner, moveCount]);

  const clickHandler = (index) => {
    isXplayer ? dispatch(Xmove(index)) : dispatch(Omove(index));
    setXplayer(!isXplayer);
    setMoveCount((moveCount) => moveCount + 1);
  };

  const resetHandler = () => {
    dispatch(Reset());
    setMoveCount(0);
  };

  return (
    <div className="pvsp">
      <div className="gameHeadline">
        <Headline id={"gameHeadline"} text={Msg} />
      </div>

      <div className="game" id="game">
        <section className="gameBoard">
          {gameState.map((element, index) => (
            <Box
              id={index}
              value={element}
              key={index}
              click={() => clickHandler(index)}
            />
          ))}
        </section>
      </div>

      <div className="buttons">
        <Button id={"reset"} text={"Reset"} click={() => resetHandler()} />
        <Button id={"home"} text={"Home"} click={() => dispatch(Home())} />
      </div>
    </div>
  );
}
