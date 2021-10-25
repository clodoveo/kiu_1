import React, { useState } from "react";
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import LoadingSpinner from "../components/LoadingSpinner";
import InfoCards from "../components/InfoCards";

import infoApi from "../api/info";
// import { useInfo } from "../hooks/useAppData";

export default function InfoScreen() {
  const [items, setItems] = useState(null);

  if (! items) {
    const langId = 1;

    infoApi.fetch(langId).then(setItems);
  }

  const body = items ?
    <InfoCards items={items} /> :
    <LoadingSpinner />

  return (
    <AnimatedFrame scrollable>
      <div>
        <ScreenHeader text="Informazioni utili" />
        {body}
        <ScreenFooter />
      </div>
    </AnimatedFrame>
  );
}
