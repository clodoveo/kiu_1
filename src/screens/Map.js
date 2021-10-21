import React from "react";

import Opener from "../components/Opener";

export default function () {
  const params = {
    title: "Livorno via Garibaldi",
    text: "Verrai reindirizzato sul tuo navigatore",
    image:"https://giomiapp.terotero.it/img/original/app/map.png",
    link: {
      to: "http://maps.apple.com/?q=Houston,+TX",
      label: "Parti ora",
      external:true
    },
    icon:"https://giomiapp.terotero.it/img/original/app/map-icon.png"
  };

  return <Opener {...params} />;
}
