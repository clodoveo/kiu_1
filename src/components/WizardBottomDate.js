import React from 'react'
import styled from "styled-components";

export default function WizardBottomDate() {
    return (
        <Wrapper>
            <Date title="Data Inizio" day="27" month="06" border={ true }/>
            <Date title="Data Fine" day="03" month="07"/>
        </Wrapper>
    )
}


const Date = (props) => {
    return (
        <DataContainer border={ props.border}>
            <div className="title">{props.title}</div>
                <div className="date-wrapper">
                    <div className="day">{ props.day}</div>
                    <div className="month">{props.month}</div>
                </div>
        </DataContainer>
    
    )
}



const Wrapper = styled.div`
display:flex;
justify-content: space-around;
/*background-image:url('https://giomiapp.terotero.it/img/original/app/Line.png');*/
background-position:center;
background-repeat:no-repeat;
border-bottom:1px solid #ccc;
padding-bottom:25px;

`

const DataContainer = styled.div`
width:150px;
& .date-wrapper{
    display: flex;
    flex-direction:columns;
    justify-content: center;
    border-right:${(props)=>props.border?'1px solid #ccc':'none'};
    padding-top:10px

}

& .day{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        line-height: 126px;
        text-align: center;
        color: #FEB700;
        line-height:60px;
        padding:2px;
        ali
}
& .month{
    font-family:'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 39px;
    text-align: center;
    color: #FEB700;
    padding:2px;
    
}    

& .title{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #607464;
}
`