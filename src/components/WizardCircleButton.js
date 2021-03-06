import React from 'react'
import styled from "styled-components";

export default function WizardCircleButton({ onClick, image, title, hasBorder, badge }) {
  let wrapperClassName = "imgWrapper"

  if (hasBorder !== false) {
    wrapperClassName += " has-border"
  }

  return (
    <StyledButton onClick={onClick}>
      <span className={wrapperClassName}>
        <img src={image} />
      </span>
      <span className="title">{title}</span>
      {badge && <img className="badge" src={badge} />}
    </StyledButton>
  )
}

const StyledButton = styled.button `
  border: none;
  background-color: transparent;
  position: relative;

  span {
    display: block;
  }

  .imgWrapper {
    text-align:center;
    margin: 0 auto;
    border-radius: 50%;
    width: 69px;
    height: 69px;

    &.has-border {
      padding: 7px;
      border: 7px solid #EEE;
    }

    >img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .title {
    font-size:27px
  }

  .badge {
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border-radius: 50% 50% 50% 0;
    box-shadow: 5px 5px 10px #888;
  }
`