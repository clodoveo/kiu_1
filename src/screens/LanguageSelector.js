import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";
import WizardBottom from "../components/WizardBottom";
import WizardCircleButton from "../components/WizardCircleButton";
import WizardMessage from "../components/WizardMessage";
import WizardStepIndicator from "../components/WizardStepIndicator";

import { ConfigContext } from "../contexts/ConfigContext";

import { useLanguages, useLabel, useUserAccount } from "../hooks/useAppData";
import useAnimationMode from "../hooks/useAnimationMode";

export default function LanguageSelector() {
  const { langId, setLangId } = useContext(ConfigContext);

  const history = useHistory();

  const label = useLabel();

  const userAccount = useUserAccount();
  const wizardTitle = `${label("hello")} ${userAccount.name.first}`;

  const wizardCaption =
    label("chooseYourLanguageLine1") +
    "<br>" +
    label("chooseYourLanguageLine2");

  function clickHandler(langId) {
    setLangId(langId);
    history.push("/guide");
  }

  const wrapperStyle = {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    textAlign: "center",
  };

  const langs = useLanguages();

  const animationMode = useAnimationMode([
    { fromKey: "splash", mode: "slideFromBottomAndFadeOut" },
    { fromKey: "guide", mode: "slideFromLeft" },
  ]);

  return (
    <AnimatedFrame mode={animationMode}>
      <WizardWrapper logoTop="10%">
        <div style={wrapperStyle}>
          <div className="wizard-middle">
            <WizardMessage title={wizardTitle} caption={wizardCaption} />
            <WizardStepIndicator activeIndex={1} />
          </div>

          <WizardBottom divider={true}>
            {langs &&
              langs.map((lang) => (
                <WizardCircleButton
                  key={lang.id}
                  onClick={() => clickHandler(lang.id)}
                  image={lang.image}
                  title={lang.label}
                />
              ))}
          </WizardBottom>
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}
