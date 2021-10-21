import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function (props) {
  const { to, text, color, icon } = props;

  return (
    <WizardButton className={color}>
      
      <Link to={to}> {icon && <img className="btn-icon" src={ icon }/>} {text}</Link>
    </WizardButton>
  );
}

const WizardButton = styled.div`
  a {
    position:relative;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 22px;
    min-width: 260px;
    background: #feb700;
    color: white;
    padding: 1em;
    display: inline-block;
    text-decoration: none;
    border-radius: 50px;
  }
  &.green a {
    background: #2aaa46;
  }
  &.yellow a {
    background: #feb700;
  }
  .btn-icon {
    width:37px;
    position:absolute;
    left:15px;
    top:17px;
  }
`;
