import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

import AnimatedFrame from "../components/AnimatedFrame";
import WizardButton from "../components/WizardButton";

export default function ({ title, text, link,image }) {
  if (link) {
    link = <WizardButton to={link.to} text={link.label} color="yellow" />;
  }
  const history = useHistory();
  
  return (
    <AnimatedFrame>
      <Opener>
        <button className="close" onClick={ ()=>history.goBack()}>
          <img src="https://giomiapp.terotero.it/img/original/app/close.png" />
        </button>
        <h1 className="title">{title}</h1>
        <div className="image-wrapper">
          <img src={image} />
        </div>
        <p className="message-caption">
          {text}
        </p>
        <div className="button">
          {link}
        </div>
      </Opener>
    </AnimatedFrame>
  );
}

const Opener = styled.div`
  text-align: center;
  background: #265a32;
  background-image:url('https://giomiapp.terotero.it/img/original/app/opener-bg.png');
  background-size:cover;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .close{
    position:fixed;
    top:10px;
    right:10px;
    width:50px;
    height:50px;
    background:none;
    border:none;
  }
  & img{
    width:100%
  }

  .title {
    color: #fff;
    margin-top:70px;
  }
  .button{
    margin-bottom:70px;
  }
  .message-caption{
    width:250px;
    margin:0 auto;
  }
  .image-wrapper{
    width:220px;
    height:220px;
    border-radius:50%;
    text-align:center;
    border:20px solid #376741;
    margin:0 auto;
  }
  & img{
    max-width:100%;

  }

`;
