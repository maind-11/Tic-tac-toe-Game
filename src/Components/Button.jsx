import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <button id={props.id} className="button" onClick={props.click}>
      {props.text}
    </button>
  );
}
