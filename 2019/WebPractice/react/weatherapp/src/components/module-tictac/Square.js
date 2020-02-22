import React from "react";

export function Square(props) {
  return <span onClick={props.handleClick}>{props.num}</span>;
}
