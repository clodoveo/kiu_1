import { React, useContext, useEffect } from "react";
// import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";

import LoadingSpinner from "../components/LoadingSpinner";
import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";

import { ConfigContext } from "../contexts/ConfigContext";
import { useReservation, useLabel, deleteToken } from "../hooks/useAppData";

import useAnimationMode from "../hooks/useAnimationMode";

export default function Splash() {
  const btnStyle = {
    position: "absolute",
    bottom: "30%",
    width: "100%",
    textAlign: "center",
  };

  const animationMode = useAnimationMode([
    { fromKey: "language", mode: "slideFromTop" },
  ]);

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
  const reservation = useReservation();

  if (!reservation) {
    return <LoadingSpinner className="is-white" />;
  }

  return (
    <>
      <WizardButton to="/language" text="Start" color="yellow" />

      <Logout />
    </>
  );
}

function Logout() {
  const style = {
    color: "#fff8",
    position: "fixed",
    left: "2em",
    bottom: "2em",
    background: "none",
    border: "none",
  };

  return (
    <button style={style} onClick={handleClick}>
      Logout / Esci
    </button>
  );
}

function handleClick() {
  deleteToken();

  location = "/";
}
