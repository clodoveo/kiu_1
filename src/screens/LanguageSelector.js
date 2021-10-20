import { React, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import useLabels from "../hooks/useLabels";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";
import WizardBottom from '../components/WizardBottom'
import WizardCircleButton from "../components/WizardCircleButton"
import WizardMessage from "../components/WizardMessage"
import WizardStepIndicator from "../components/WizardStepIndicator"

import { ConfigContext } from "../contexts/ConfigContext";

export default function LanguageSelector() {
  const { language, setLanguage, labels, setLabels } = useContext(
    ConfigContext
  );

  const history = useHistory();

  const getLabels = useLabels();

  function clickHandler(langId) {
    setLanguage(langId);
    history.push("/guide");
  }

  return (
    <AnimatedFrame>
      <WizardWrapper logoTop="10%">
        
        
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            width: "100%",
            textAlign: "center"
          }}
        >

          <WizardMessage title="Ciao Giovanni" caption="Scegli la tua lingua <br> Choose your language "></WizardMessage>
          <WizardStepIndicator activeIndex={1}/>
          <WizardBottom divider={true}>
            <WizardCircleButton onClick={() => clickHandler(1)} image="https://giomiapp.terotero.it/img/original/app/ita.png" title="italiano"/>
            <WizardCircleButton onClick={() => clickHandler(3)} image="https://giomiapp.terotero.it/img/original/app/en.png"title="inglese" />           
          </WizardBottom> 
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}
