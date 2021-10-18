import React, { useContext } from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardWrapper from "../components/WizardWrapper";
import WizardButton from "../components/WizardButton";
import { ConfigContext } from "../contexts/ConfigContext";

export default function Start() {
  const { language, guide } = useContext(ConfigContext);

  return (
    <AnimatedFrame>
      <WizardWrapper logoTop="40%">
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            width: "100%",
            textAlign: "center"
          }}
        >
          <h1>Start</h1>

          <h1>{language}</h1>
          <h1>{guide}</h1>

          <WizardButton to="/menu" text="AUANTI" />
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}
