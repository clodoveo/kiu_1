import React, { useState, useEffect, memo } from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import InfoCards from "../components/InfoCards";
import VideoPlayer from "../components/VideoPlayer";
import ResponsiveMedia from "../components/ResponsiveMedia";

import { useLabel, useVideos } from "../hooks/useAppData";
import useAnimationMode from "../hooks/useAnimationMode";

const breakPoints = [1024, 768, 480, 360];

// evita render ripetuti
const MemoVideo = memo(VideoPlayer);

export default function VideoPlaylist() {
  const label = useLabel();

  const playlist = useVideos();

  const animationMode = useAnimationMode([
    { fromKey: "*", mode: "overlayFromRightAndBack" },
  ]);

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <ScreenHeader text={label("btnVideoTitle")} />

      <InfoCards items={playlist} coverComponent={Item} noGuts />

      <ScreenFooter />
    </AnimatedFrame>
  );
}

function Item(props) {
  return (
    <ResponsiveMedia breakPoints={breakPoints}>
      <MemoVideo {...props} />
    </ResponsiveMedia>
  );
}
