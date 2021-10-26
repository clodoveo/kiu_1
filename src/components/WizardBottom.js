import React from 'react'
import styled from 'styled-components'

export default function({ divider, lastScreen, height, children }) {
  // default
  const style = {
    flexDirection: "row",
    height: "30vh"
  }

  if (divider) {
    style.backgroundImage = "url(https://giomiapp.terotero.it/img/original/app/Line.png)"
    style.backgroundPosition = "center"
    style.backgroundRepeat = "no-repeat"
  }

  if (lastScreen) {
    style.flexDirection = "column"
  }

  if (height) {
    style.height = `${height}vh`
  }

  return (
    <WizardBottom style={style}>
      {children}
    </WizardBottom>
  )
}

const WizardBottom = styled.div`
  position: absolute;
  bottom:0;

  background-color:#fff;
  width:100%;
  border-radius: 35px 35px 0 0;
  display:flex;
  justify-content: space-around;
  align-items: center;

  padding: 2em 0;
`
