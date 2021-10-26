import React, { useState, useEffect, memo } from "react";
import { useHistory } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import InfoCards from "../components/InfoCards";
import VideoPlayer from "../components/VideoPlayer";

import { useLabels, usePlaylist } from "../hooks/useAppData"

// evita render ripetuti
const MemoVideo = memo(VideoPlayer)

export default function() {
  const label = useLabels()

  const playlist = usePlaylist()

  return (
    <AnimatedFrame scrollable>
      <ScreenHeader text={label("btnVideoTitle")} />

      <InfoCards items={playlist} coverComponent={MemoVideo} />

      <ScreenFooter />
    </AnimatedFrame>
  );
}
