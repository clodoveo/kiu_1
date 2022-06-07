import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ({ color, to, title, caption, icon }) {
  return (
    <Styled className={color}>
      <Link to={to}>
        <span>
          <span className="title">{title}</span>
          {caption && <span className="caption">{caption}</span>}
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
  text-align: left;
  box-shadow: 0 5px #0002;

  &.green {
    background-color: #2aaa46;
  }
  &.dark-green {
    background-color: #265a32;
  }
  &.grey-green {
    background-color: #678b6f;
  }
  &.yellow {
    background-color: #feb700;

    .title {
      max-width: 9em;
    }
    .caption {
      color: #0008;
    }
  }

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
      color: #fffb;
    }
    .icon {
      color: #fff;
      font-size: 48px;
      margin-left: 0.2em;
    }
  }
`;
