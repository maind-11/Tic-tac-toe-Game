import React from "react";
import "./Box.scss";

export default function Box(props) {
  return (
    <button
      id={props.id}
      className="box"
      onClick={props.click}
      disabled={props.value === "" ? false : true}
    >
      {props.value}
    </button>
  );
}
