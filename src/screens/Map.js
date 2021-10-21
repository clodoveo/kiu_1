import React from "react";

import Opener from "../components/Opener";

export default function () {
  const params = {
    title: "Livorno via Garibaldi",
    text: "Verrai reindirizzato sul tuo navigatore",
    image:"https://giomiapp.terotero.it/img/original/app/map.png",
    link: {
      to: "/menu",
      label: "Parti ora"
    },
    icon:"https://giomiapp.terotero.it/img/original/app/map-icon.png"
  };

  return <Opener {...params} />;
}
