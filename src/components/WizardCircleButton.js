import React from 'react'
import styled from "styled-components";

export default function WizardCircleButton(props) {
    const onClick = props.onClick;
    return (
        <StyledButton onClick={onClick}>
            <div className="imgWrapper">
                <img src={props.image} />
            </div>
            <div className="title">{ props.title}</div>
        </StyledButton>
    )
}

const StyledButton = styled.button`
border:none;
background-color:transparent;
&> .imgWrapper{
    border-radius:50%;
    width:70px;
    height:70px;
    border:7px solid #EEEEEE;
    text-align:center;
    padding: 0;
    margin: 0 auto;
}
 .title{
        font-size:27px
}
`

