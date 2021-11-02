import { React, useContext, useEffect } from "react";
// import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";

import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";

import { ConfigContext } from "../contexts/ConfigContext";

import useAnimationMode from "../hooks/useAnimationMode"

export default function Splash() {
  const btnStyle = {
    position: "absolute",
    bottom: "15%",
    width: "100%",
    textAlign: "center"
  };

  const animationMode = useAnimationMode([
    { fromKey: "language", mode: "slideFromTop" }
  ])

  return (
    <AnimatedFrame mode={animationMode}>
      <WizardWrapper logoTop="36%" logoPayoff>
        <div style={btnStyle}>
          <WizardButton
            onClick={clickHandler}
            to="/language"
            text="Start"
            color="yellow"
          />
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}