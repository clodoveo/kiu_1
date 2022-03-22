import React, { useState, useEffect, memo } from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import InfoCards from "../components/InfoCards";
import VideoPlayer from "../components/VideoPlayer";
import ResponsiveMedia from "../components/ResponsiveMedia";
import ToastMessage from "../components/ToastMessage";

import {
  useLabel,
  useVideos,
  useReservation,
  useCurrentLanguage,
} from "../hooks/useAppData";
import useAnimationMode from "../hooks/useAnimationMode";

const breakPoints = [1024, 768, 480, 360];

// evita render ripetuti
const MemoVideo = memo(VideoPlayer);

export default function VideoPlaylist() {
  const label = useLabel();

  const reservation = useReservation();

  const videoList = useVideos() || [];

  const animationMode = useAnimationMode([
    { fromKey: "*", mode: "overlayFromRightAndBack" },
  ]);

  const lang = useCurrentLanguage();

  if (!lang || !reservation) {
    return <LoadingSpinner />;
  }

  const wifiToast = {};

  if (reservation?.wifi) {
    wifiToast.title = label("wifiInfoTitle");

    wifiToast.content = label("wifiInfoText")
      .replaceAll("wifi_ssid", reservation.wifi.ssid)
      .replaceAll("wifi_password", reservation.wifi.password);
  }

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <ScreenHeader text={label("btnVideoTitle")} />

      <ToastMessage title={wifiToast.title} content={wifiToast.content} />

      <InfoCards items={videoList} coverComponent={Item} noGuts />

      <ScreenFooter />
    </AnimatedFrame>
  );
}

function Item(props) {
  // console.log(props);

  if (!props.cloudName) {
    return <></>;
  }

  return (
    <ResponsiveMedia breakPoints={breakPoints}>
      <MemoVideo {...props} />
    </ResponsiveMedia>
  );
}
