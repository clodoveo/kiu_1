import React from "react";

import { useReservation, useLabels } from "../hooks/useAppData"

import Opener from "../components/Opener";

export default function () {
  const reservation = useReservation() 
  const label = useLabels()

  const params = {
    title: reservation?.address,
    text: label("mapCaption"),
    image:"https://giomiapp.terotero.it/img/original/app/map.png",
    link: {
      to: reservation?.mapUrl,
      label: label("btnMapGo"),
      external:true
    },
    icon:"https://giomiapp.terotero.it/img/original/app/map-icon.png"
  };

  return <Opener {...params} />;
}
