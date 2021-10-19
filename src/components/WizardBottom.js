import React from 'react'
import styled from 'styled-components'

const Styled= styled.div`
  position: fixed;
  bottom:0;
  height:33vh;
  background-color:#fff;
  width:100%;
  border-radius: 35px 35px 0 0;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
 
`;


export default function WizardBottom(props) {
    return (
        <Styled style={props.divider && {
            backgroundImage: "url(https://giomiapp.terotero.it/img/original/app/Line.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }
        }>
            {props.children}
        </Styled>
    )
}