import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  position: fixed;
  bottom:0;
 
  background-color:#fff;
  width:100%;
  border-radius: 35px 35px 0 0;
  display:flex;
  justify-content: space-around;
  align-items: center;
 
`;


export default function WizardBottom(props) {

    const backgroundConditionalStyle = props.divider ? {
        backgroundImage: "url(https://giomiapp.terotero.it/img/original/app/Line.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    } : {}

  
    const flexConditionalStyle = props.lastScreen ? {flexDirection: "column"} : { flexDirection: "row"}
    const heightConditionaStyle = props.vh ? { height: `${props.vh}vh` }:{ height:'30vh'}

        const conditionalStyle = { ...backgroundConditionalStyle, ...flexConditionalStyle, ...heightConditionaStyle }

    return (
        <Styled style={conditionalStyle}>
            {props.children}
        </Styled>
    )
}