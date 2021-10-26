import React, { useContext } from "react";

import Opener from "../components/Opener";

import { ConfigContext } from "../contexts/ConfigContext";
import { useLabels, useAccount } from "../hooks/useAppData"

export default function () {
  const label = useLabels()

  const { guide } = useContext(ConfigContext)

  const params = {
    title: `${label("btnChatTitle")} ${guide.name}`,
    text: label("btnChatCaption"),
    link: {
      to: label("btnChatUrl"),
      label: label("btnChatGo"),
      external:true
    },
    image: guide.picture,
    icon:"https://giomiapp.terotero.it/img/original/app/chat-icon.png"
  };

  return <Opener {...params} />;
}
