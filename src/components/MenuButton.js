import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ({ color, to, title, caption, icon }) {
  return (
    <Styled className={color}>
      <Link to={to}>
        <span>
          <span className="title">{title}</span>
          <span className="caption">{caption}</span>
        </span>
        <i className={icon + " icon"} />
      </Link>
    </Styled>
  );
}

const Styled = styled.div`
  position: relative;
  margin: 15px;
  border-radius: 15px;
  border: 1px solid #ccc;
  background-color: #265a32;
  text-align: left;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 22px;
    text-decoration: none;
    color: initial;

    span {
      display: block;
      line-height: 33px;
    }
    .title {
      color: #fff;
      font-size: 23px;
      text-decoration: none;
      text-transform: original;
    }
    .caption {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
    }
    .icon {
      color: #fff;
      font-size: 48px;
    }
  }
`;
