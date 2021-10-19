import { React, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";
import WizardBottom from '../components/WizardBottom'
import WizardCircleButton from "../components/WizardCircleButton"


import { ConfigContext } from "../contexts/ConfigContext";


export default function GuideSelector() {
  const { labels, guide, setGuide } = useContext(ConfigContext);
  const history = useHistory();

  console.log(labels);

  function clickHandler(par) {
    setGuide(par);
    history.push("/start");
  }

  return (
    <AnimatedFrame>
      <WizardWrapper logoTop="20%">
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            width: "100%",
            textAlign: "center"
          }}
        >
          <WizardBottom  divider={ true }>
            <WizardCircleButton onClick={() => clickHandler("Paola")} image="https://giomiapp.terotero.it/img/original/app/agente1.png" title="Paola"/>
            <WizardCircleButton onClick={() => clickHandler("Luca")} image="https://giomiapp.terotero.it/img/original/app/agente2.png"title="Luca" />           
          </WizardBottom> 
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}
