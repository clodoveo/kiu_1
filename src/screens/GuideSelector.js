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

import { useLabels, useGuides, useUserAccount } from "../hooks/useAppData"
import useAnimationMode from "../hooks/useAnimationMode"

export default function GuideSelector() {
  const { setGuideId, langId } = useContext(ConfigContext);
  const history = useHistory();

  const label = useLabels()

  const guides = useGuides()
  const guidesList = guides.list()

  const userAccount = useUserAccount()
  const wizardTitle = `${label("hello")} ${userAccount.name.first}`

  function clickHandler(guideId) {
    const guide = guides.byId(guideId)
    setGuideId(guideId);
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
          <div className="wizard-middle">
            <WizardMessage
              title={wizardTitle}
              caption={label("chooseYourGuide")}
            />
            <WizardStepIndicator activeIndex={2} />
          </div>

          <WizardBottom divider={true}>
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