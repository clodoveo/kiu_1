import React from "react";

import { useReservation, useLabel } from "../hooks/useAppData"

import Opener from "../components/Opener";

export default function() {
  const reservation = useReservation()
  const label = useLabel()

  const title = (
    <div>
      {reservation.address}
      <br />
      {reservation.location}
    </div>
  )

  const params = {
    title: title,
    text: label("mapCaption"),
    image: "https://giomiapp.terotero.it/img/original/app/map.png",
    link: {
      to: reservation ? reservation.mapUrl : "",
      label: label("btnMapGo"),
      external: true
    },
    icon: "https://giomiapp.terotero.it/img/original/app/map-icon.png"
  };

  return <Opener {...params} />;
}