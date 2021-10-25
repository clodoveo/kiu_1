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

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(ConfigContext)

  const history = useHistory();

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
          <WizardMessage title="Ciao Giovanni" caption="Scegli la tua lingua <br> Choose your language" />
          <WizardStepIndicator activeIndex={1}/>
          <WizardBottom divider={true} vh={ 30 }>
            {languages.map(lang => (
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

const languages = [
  {
    id: 1,
    image: "https://giomiapp.terotero.it/img/original/app/ita.png",
    title: "Italiano"
  },
  {
    id: 3,
    image: "https://giomiapp.terotero.it/img/original/app/en.png",
    title: "English"
  }
]
