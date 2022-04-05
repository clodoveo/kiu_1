import React, { useState } from "react";
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import LoadingSpinner from "../components/LoadingSpinner";
import InfoCards from "../components/InfoCards";

import { useReservation, useLabel, useHouse } from "../hooks/useAppData";
import useAnimationMode from "../hooks/useAnimationMode";

export default function InfoScreen() {
  const label = useLabel();

  const items = useHouse();

  const animationMode = useAnimationMode([
    {
      fromKey: "*",
      mode: "overlayFromRightAndBack",
    },
  ]);

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <div>
        <ScreenHeader text={label("houseTitle")} />

        <InfoCards items={items} />

        <ScreenFooter />
      </div>
    </AnimatedFrame>
  );
}
