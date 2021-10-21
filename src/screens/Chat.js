import React from "react";

import Opener from "../components/Opener";

export default function () {
  const params = {
    title: "Chatta con Giuseppe",
    text: "Verrai reindirizzato su Whatsapp",
    link: {
      to: "/menu",
      label: "Chatta ora"
    },
    image: "https://giomiapp.terotero.it/img/original/app/agente1.png",
    icon:"https://giomiapp.terotero.it/img/original/app/chat-icon.png"
  };

  return <Opener {...params} />;
}
