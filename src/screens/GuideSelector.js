import { React, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";
import WizardBottom from '../components/WizardBottom'
import WizardCircleButton from "../components/WizardCircleButton"
import WizardMessage from "../components/WizardMessage"
import WizardStepIndicator from "../components/WizardStepIndicator" 

import { ConfigContext } from "../contexts/ConfigContext";

import { useLabels, useGuides } from "../hooks/useAppData"

export default function GuideSelector() {
  const { setGuide, language } = useContext(ConfigContext);
  const history = useHistory();

  const { byName: label } = useLabels()

  const guidesHook = useGuides()
  const guides = guidesHook.list()

  function clickHandler(guideId) {
    const guide = guidesHook.byId(guideId)
    setGuide(guide);
    history.push("/start");
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

          <WizardMessage title="Ciao Giovanni" caption="Scegli la tua guida "></WizardMessage>
          <WizardStepIndicator activeIndex={ 2}/>
          <WizardBottom  divider={ true }>
            {guides && guides.map(guide => (
              <WizardCircleButton
                key={guide.id}
                title={guide.name}
                image={guide.picture}
                onClick={() => clickHandler(guide.id)}
              />
            ))}
          </WizardBottom> 
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}
