import React, { useContext } from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardWrapper from "../components/WizardWrapper";
import WizardButton from "../components/WizardButton";
import WizardBottom from "../components/WizardBottom";
import WizardBottomDate from "../components/WizardBottomDate";
import WizardMessage from "../components/WizardMessage";
import WizardStepIndicator from "../components/WizardStepIndicator";

import { useLabels } from "../hooks/useAppData"
import useAnimationMode from "../hooks/useAnimationMode"

export default function Start() {
  const label = useLabels()

  const startStyle = {
    fontSize: "23px",
    lineHeight: "20px",
    maxWidth: "60%",
    color: "#607464"
  }

  const wrapperStyle = {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    bottom: 0,
    top: 0
  }

  const animationMode = useAnimationMode([
    { fromKey: "guide", mode: "slideFromRight" },
    { fromKey: "menu", mode: "slideFromLeft" }
  ])

  return (
    <AnimatedFrame mode={animationMode}>
      <WizardWrapper logoTop="10%">
        <div style={wrapperStyle}>
          <WizardMessage
            title={label("success")}
            caption={label("successInfo")}
          />

          <WizardStepIndicator activeIndex={ 3}/>

          <WizardBottom lastScreen={true} vh="45">
            <WizardBottomDate />

            <div className="title" style={startStyle}>
              {label("yourHolidayStartsHere")}
            </div>

            <WizardButton
              color="green"
              to="/menu"
              text={label("start")}
            />
          </WizardBottom>
        </div>
      </WizardWrapper>
    </AnimatedFrame>
  )
}