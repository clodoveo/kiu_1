import React from "react";

import Opener from "../components/Opener";

export default function () {
  const params = {
    title: "Livorno via Garibaldi",
    text: "Verrai reindirizzato sul tuo navigatore",
    link: {
      to: "/menu",
      label: "Parti ora"
    }
  };

  return <Opener {...params} />;
}
