import React from 'react'
import styled from "styled-components";

export default function({ onClick, image, title, hasBorder }) {
  let wrapperClassName = "imgWrapper"

  if (hasBorder !== false) {
    wrapperClassName += " has-border"
  }

  return (
    <WizardCircleButton onClick={onClick}>
      <span className={wrapperClassName}>
        <img src={image} />
      </span>
      <span className="title">{title}</span>
    </WizardCircleButton>
  )
}

const WizardCircleButton = styled.button`
  border: none;
  background-color: transparent;

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
`
