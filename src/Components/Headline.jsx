import React from "react";
import "./Headline.scss";

export default function Headline(props) {
  return (
    <div id={props.id} className="headline">
      {props.text}
    </div>
  );
}
