import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Components/Button";
import Headline from "../Components/Headline";
import "./Home.scss";

import { PvsP, PvsB } from "../Redux/Redux";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <Headline text={"Welcome to The Game"} />
      <Button text={"Start"} click={() => dispatch(PvsP())} />
      {/* <Button text={"P vs Bot"} click={() => dispatch(PvsB())} /> */}
    </div>
  );
}
