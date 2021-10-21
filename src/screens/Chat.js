import React from "react";

import Opener from "../components/Opener";

export default function () {
  const params = {
    title: "Chatta con Giuseppe",
    text: "Verrai reindirizzato su Whatsapp",
    link: {
      to: "https://wa.me/+393929278281",
      label: "Chatta ora",
      external:true
    },
    image: "https://giomiapp.terotero.it/img/original/app/agente1.png",
    icon:"https://giomiapp.terotero.it/img/original/app/chat-icon.png"
  };

  return <Opener {...params} />;
}
