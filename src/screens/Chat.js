import React, { useContext } from "react";

import Opener from "../components/Opener";
import LoadingSpinner from "../components/LoadingSpinner";

import { ConfigContext } from "../contexts/ConfigContext";
import { useLabels, useGuides } from "../hooks/useAppData"

export default function() {
  const label = useLabels()

  const { guideId } = useContext(ConfigContext)

  const guide = useGuides().byId(guideId)

  if (guide === null) {
    return <LoadingSpinner />
  }

  const params = {
    title: `${label("btnChatTitle")} ${guide.name}`,
    text: label("btnChatCaption"),
    link: {
      to: label("btnChatUrl"),
      label: label("btnChatGo"),
      external: true
    },
    image: guide.picture,
    icon: "https://giomiapp.terotero.it/img/original/app/chat-icon.png"
  };

  return <Opener {...params} />;
}