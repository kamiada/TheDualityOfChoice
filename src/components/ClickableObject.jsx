import React from "react";
import "./components.scss";

export const ClickableObject = (props) => {
  return (
    <button id={props.id} className="object" onClick={props.onClick}>
      <img alt={props.desc} src={props.thisIs} />
    </button>
  );
};

export default ClickableObject;
