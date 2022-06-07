import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import LoadingSpinner from "../components/LoadingSpinner";
import InfoCards from "../components/InfoCards";

import {
  useReservation,
  useLabel,
  useHouseSection,
  useHouse,
} from "../hooks/useAppData";
import useAnimationMode from "../hooks/useAnimationMode";

export default function InfoScreen() {
  const label = useLabel();

  const location = useLocation();
  const sectionName = location.pathname.substring(7);
  const section = useHouseSection(sectionName);

  const items = useHouse({ sectionId: section.id });

  const animationMode = useAnimationMode([
    {
      fromKey: "*",
      mode: "overlayFromRightAndBack",
    },
  ]);

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <div>
        <ScreenHeader text={section.title} />

        <InfoCards items={items} />

        <ScreenFooter />
      </div>
    </AnimatedFrame>
  );
}
