import React from "react";
import { Link } from "react-router-dom";

export default function MenuButton(props) {
  return (
    <Link to={props.to}>
      <div>
        <div>{props.title}</div>
        <div>{props.caption}</div>
        <i className={props.icon} />
      </div>
    </Link>
  );
}
