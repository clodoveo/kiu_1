import React from "react";

import Opener from "../components/Opener";

export default function () {
  const params = {
    title: "Chatta con Giuseppe",
    text: "Verrai reindirizzato su Whatsapp",
    link: {
      to: "/menu",
      label: "Chatta ora"
    }
  };

  return <Opener {...params} />;
}
