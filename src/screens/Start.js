import React, { useContext } from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardWrapper from "../components/WizardWrapper";
import WizardButton from "../components/WizardButton";
import WizardBottom from "../components/WizardBottom";
import WizardBottomDate from "../components/WizardBottomDate";
import WizardMessage from "../components/WizardMessage";
import WizardStepIndicator from "../components/WizardStepIndicator";

import { ConfigContext } from "../contexts/ConfigContext";

export default function Start() {
  const { language, guide } = useContext(ConfigContext);

  const StartStyle = {
    fontSize: "23px",
    lineHeight: "20px",
    maxWidth: "60%",
    color: "#607464"
  };

  return (
    <AnimatedFrame>
      <WizardWrapper logoTop="10%">
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            width: "100%",
            textAlign: "center"
          }}
        >
        
           <WizardMessage title="Perfetto" caption="Siamo pronti "></WizardMessage>
          <WizardStepIndicator activeIndex={ 3}/>
          <WizardBottom lastScreen={true} vh="45">
            <WizardBottomDate />
            <div className="title" style={StartStyle}>
              La tua vacanza comincia ora
            </div>
            <WizardButton color="green" to="/menu" text="Cominciamo!" />
          </WizardBottom> 
          
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}
