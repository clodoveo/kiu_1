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

import { useLabels, useGuides, useAccount } from "../hooks/useAppData"
import useAnimationMode from "../hooks/useAnimationMode"

export default function GuideSelector() {
  const { setGuide, language } = useContext(ConfigContext);
  const history = useHistory();

  const label = useLabels()

  const guides = useGuides()
  const guidesList = guides.list()

  const account = useAccount()

  const userName = account.current("name")
  const wizardTitle = `${label("hello")} ${userName}`

  function clickHandler(guideId) {
    const guide = guides.byId(guideId)
    setGuide(guide);
    history.push("/start");
  }

  const wrapperStyle = {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    bottom: 0,
    top: 0
  }

  const animationMode = useAnimationMode([
    { fromKey: "language", mode: "slideFromRight" },
    { fromKey: "start", mode: "slideFromLeft" }
  ])

  return (
    <AnimatedFrame mode={animationMode}>
      <WizardWrapper logoTop="10%">
        <div style={wrapperStyle}>
          <WizardMessage
            title={wizardTitle}
            caption={label("chooseYourGuide")}
          />

          <WizardStepIndicator activeIndex="2"/>

          <WizardBottom  divider={ true }>
            {guidesList && guidesList.map(guide => (
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