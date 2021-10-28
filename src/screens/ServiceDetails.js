import React, { useState } from "react";
import { useParams } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import Article from "../components/Article";

import { useServices } from "../hooks/useAppData"
import useAnimationMode from "../hooks/useAnimationMode"

export default function ServiceDetails() {
  const { id } = useParams()

  const serviceData = useServices(id)

  const animationMode = useAnimationMode([
    { fromKey: "*", mode: "overlayFromRightAndBack" }
  ])

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <ScreenHeader
        text={serviceData && serviceData.title}
        backToTarget="/services"
      />

      <Article {...serviceData} />

      <ScreenFooter />
    </AnimatedFrame>
  );
}