import React, { useState } from "react";
import { useParams } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import Article from "../components/Article";
import WizardButton from "../components/WizardButton";

import { useServices, useLabel } from "../hooks/useAppData";
import useAnimationMode from "../hooks/useAnimationMode";

export default function ServiceDetails() {
  const { id } = useParams();

  const serviceData = useServices(id);
  const label = useLabel();

  if (serviceData?.mapUrl) {
    serviceData.link = {
      to: serviceData.mapUrl,
      label: label("btnServiceGo"),
      external: true,
      icon: "https://giomiapp.terotero.it/img/original/app/map-icon.png",
    };
  }

  if (serviceData?.addresses.length) {
    serviceData.links = serviceData.addresses.map((address) => {
      return {
        to: address.mapUrl,
        label: address.label || label("btnServiceGo"),
        external: true,
        icon: "https://giomiapp.terotero.it/img/original/app/map-icon.png",
      };
    });
  }

  const animationMode = useAnimationMode([
    { fromKey: "*", mode: "overlayFromRightAndBack" },
  ]);

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
