import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function (props) {
  const { to, text, color, size, icon, external, onClick } = props;

  return (
    <WizardButton className={[color, size].join(" ")}>
      {external ? (
        <a href={to} target={props.target || "_blank"}>
          {icon && <img className="btn-icon" src={icon} />} {text}
        </a>
      ) : (
        <Link onClick={onClick} to={to}>
          {icon && <img className="btn-icon" src={icon} />} {text}
        </Link>
      )}
    </WizardButton>
  );
}

const WizardButton = styled.div`
  a {
    position: relative;
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
    width: 37px;
    position: absolute;
    left: 15px;
    top: calc(50% - 18px);
  }
  &.small a {
    font-size: 18px;

    > img {
      left: 10px;
    }
  }
`;
