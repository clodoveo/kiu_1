import React from 'react'
import styled from 'styled-components'

export default function WizardStepIndicator({ activeIndex }) {
  return (
    <Wrapper>
      <span className={"dot" + (activeIndex === 1 ? " active" : "")} />
      <span className={"dot" + (activeIndex === 2 ? " active" : "")} />
      <span className={"dot" + (activeIndex === 3 ? " active" : "")} />
    </Wrapper>
  )
}

const Wrapper = styled.div `
  display: flex;
  flex-direction: columns;
  padding-top: 1em;
  justify-content: center;

  .dot {
    width: 10px;
    height: 10px;

    border-radius: 50%;
    margin: 3px;
    background: rgba(255, 255, 255, 0.4);

    &.active{
      background-color: #fff;
    }
  }
`