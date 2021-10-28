import React from 'react'
import styled from 'styled-components'

export default function WizardStepIndicator(props) {
  return (
    <Wrapper>
      <Item className={props.activeIndex==1 && "active" }/>
      <Item className={props.activeIndex==2 && "active" }/>
      <Item className={props.activeIndex==3 && "active" }/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: columns;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  bottom: 50vh;
`

const Item = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  margin: 3px;
  background: rgba(255, 255, 255, 0.4);

  &.active{
    background-color: #fff;
  }
`
