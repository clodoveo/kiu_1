import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";
import WizardBottom from "../components/WizardBottom"
import WizardCircleButton from "../components/WizardCircleButton"
import WizardMessage from "../components/WizardMessage"
import WizardStepIndicator from "../components/WizardStepIndicator"

import { ConfigContext } from "../contexts/ConfigContext";

import { useLanguages, useLabels, useUserAccount } from "../hooks/useAppData"
import useAnimationMode from "../hooks/useAnimationMode"


export default function LanguageSelector() {
  const { language, setLanguage } = useContext(ConfigContext)

  const history = useHistory()

  const label = useLabels()

  const userAccount = useUserAccount()
  const wizardTitle = `${label("hello")} ${userAccount.name.first}`

  const wizardCaption = label("chooseYourLanguageLine1") + "<br>" + label("chooseYourLanguageLine2")

  function clickHandler(langId) {
    setLanguage(langId)
    history.push("/guide")
  }

  const wrapperStyle = {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    bottom: 0,
    top: 0
  }

  const languages = useLanguages()

  const animationMode = useAnimationMode([
    { fromKey: "splash", mode: "slideFromBottomAndFadeOut" },
    { fromKey: "guide", mode: "slideFromLeft" }
  ])

  return (
    <AnimatedFrame mode={animationMode}>
      <WizardWrapper logoTop="10%">
        <div style={wrapperStyle}>
          <div className="wizard-middle">
            <WizardMessage title={wizardTitle} caption={wizardCaption}/>
            <WizardStepIndicator activeIndex={1} />
          </div>

          <WizardBottom divider={true}>
            {languages && languages.map(lang => (
              <WizardCircleButton key={lang.id}
                onClick={() => clickHandler(lang.id)}
                image={lang.image}
                title={lang.title}
              />
            ))}
          </WizardBottom> 
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}