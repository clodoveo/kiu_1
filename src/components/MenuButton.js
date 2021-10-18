import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuButtonRaw = (props) => {
  return (
    <div className={props.className}>
      <Link to={props.to}>
        <div className="menubutton-title">{props.title}</div>
        <div className="menubutton-caption">{props.caption}</div>
        <i className={`${props.icon}  menubutton-icon`} />
      </Link>
    </div>
  );
};
const MenuButton = styled(MenuButtonRaw)`
  position: relative;
  margin: 15px;
  border-radius: 15px;
  border: 1px solid #ccc;
  background-color: #265a32;
  text-align: left;
  padding: 12px 22px;

  a {
    text-decoration: none;
    color: initial;
  }
  .menubutton-title {
    color: #fff;
    font-family: "Baloo 2";
    font-size: 23px;
    text-decoration: none;
    text-transform: original;
  }
  .menubutton-caption {
    font-size: 16px;
    /*line-height: 20px;*/
    color: rgba(255, 255, 255, 0.7);
  }
  .menubutton-icon {
    color: rgba(255, 255, 255);
    font-size: 30px;
    position: absolute;
    right: 19px;
    top: 22px;
  }
`;
export default MenuButton;
