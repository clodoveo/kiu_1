import React, { useContext } from "react";

import Opener from "../components/Opener";
import LoadingSpinner from "../components/LoadingSpinner";

import { ConfigContext } from "../contexts/ConfigContext";
import { useLabel, useGuides, useChatUrl } from "../hooks/useAppData";

export default function () {
  const label = useLabel();

  const chatUrl = useChatUrl();

  const { guideId } = useContext(ConfigContext);
  const guide = useGuides().byId(guideId);

  if (guide === null) {
    return <LoadingSpinner />;
  }

  const params = {
    title: `${label("btnChatTitle")} ${guide.name}`,
    text: label("btnChatCaption"),
    link: {
      to: chatUrl,
      label: label("btnChatGo"),
      external: true,
    },
    image: guide.picture,
    icon: "https://giomiapp.terotero.it/img/original/app/chat-icon.png",
  };

  return <Opener {...params} />;
}
