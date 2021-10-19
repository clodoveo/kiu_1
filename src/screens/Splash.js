import { React, useContext } from "react";
// import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";

import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";

// import { ConfigContext } from "../contexts/ConfigContext";

export default function Splash() {
  const btnStyle = {
    position: "absolute",
    bottom: "15%",
    width: "100%",
    textAlign: "center"
  };

  return (
    <AnimatedFrame>
      <WizardWrapper logoTop="40%" logoPayoff>
        <div style={btnStyle}>
          <WizardButton to="/language" text="Accedi" color="yellow" />
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}
