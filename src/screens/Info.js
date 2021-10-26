import React, { useState } from "react";
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import LoadingSpinner from "../components/LoadingSpinner";
import InfoCards from "../components/InfoCards";

import { useLabels, useInfo } from "../hooks/useAppData";

export default function InfoScreen() {
  const label = useLabels()

  const items = useInfo()

  return (
    <AnimatedFrame scrollable>
      <div>
        <ScreenHeader text={label("infoTitle")} />

        <InfoCards items={items} />

        <ScreenFooter />
      </div>
    </AnimatedFrame>
  );
}
