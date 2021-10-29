import React from 'react'
import styled from "styled-components";

export default function WizardMessage(props) {
  function createMarkup() {
    return { __html: props.caption };
  }

  return (
    <Message>
      <div className="wizard-message-title">{ props.title}</div>
      <div className="wizard-message-caption" dangerouslySetInnerHTML={ createMarkup()}/>
    </Message>
  )
}




const Message = styled.div `
  .wizard-message-title{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 42px;
  }

  .wizard-message-caption{
    font-size: 17px;
    line-height: 21px;
    height: 2.5em;
  }
`