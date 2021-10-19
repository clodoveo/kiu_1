import { React, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import useLabels from "../hooks/useLabels";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";
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
      <WizardWrapper logoTop="20%">
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            width: "100%",
            textAlign: "center"
          }}
        >
          <button onClick={() => clickHandler(1)}> IT </button>
          <button onClick={() => clickHandler(3)}> EN </button>
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}
