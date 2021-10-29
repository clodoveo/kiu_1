import React, { useState, useEffect, memo } from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import InfoCards from "../components/InfoCards";
import VideoPlayer from "../components/VideoPlayer";

import { useLabels, useVideos } from "../hooks/useAppData"
import useAnimationMode from "../hooks/useAnimationMode"

// evita render ripetuti
const MemoVideo = memo(VideoPlayer)

export default function() {
  const label = useLabels()

  const playlist = useVideos()

  const animationMode = useAnimationMode([
    { fromKey: "*", mode: "overlayFromRightAndBack" }
  ])

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <ScreenHeader text={label("btnVideoTitle")} />

      <InfoCards items={playlist} coverComponent={MemoVideo} />

      <ScreenFooter />
    </AnimatedFrame>
  );
}