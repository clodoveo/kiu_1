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
import { useLanguages, useLabels, useAccount } from "../hooks/useAppData"

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(ConfigContext)

  const label = useLabels()
  const account = useAccount()

  const userName = account.current("name")
  const wizardTitle = `${label("hello")} ${userName}`

  const wizardCapition = label("chooseYourLanguageLine1") + "<br>" + label("chooseYourLanguageLine2")

  const history = useHistory();

  function clickHandler(langId) {
    setLanguage(langId);
    history.push("/guide");
  }

  const wrapperStyle = {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    bottom: 0
  }

  const languages = useLanguages()

  return (
    <AnimatedFrame>
      <WizardWrapper logoTop="10%">
        <div style={wrapperStyle}>
          <WizardMessage title={wizardTitle} caption={wizardCapition}/>
          <WizardStepIndicator activeIndex={1}/>

          <WizardBottom divider={true} vh={ 30 }>
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
