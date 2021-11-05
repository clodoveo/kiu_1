import { React, useContext, useEffect } from "react";
// import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";

import LoadingSpinner from "../components/LoadingSpinner";
import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";

import { ConfigContext } from "../contexts/ConfigContext";
import { useReservation } from "../hooks/useAppData";

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
          <SplashBody />
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  );
}

function SplashBody() {
  const reservation = useReservation()

  if (!reservation) {
    return <LoadingSpinner className="is-white" />
  }

  return (
    <WizardButton
      to="/language"
      text="Start"
      color="yellow"
    />
  )
}