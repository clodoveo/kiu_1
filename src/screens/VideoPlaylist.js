import React, { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";

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
  useVideoSections,
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

  const location = useLocation();
  const sectionName = location.pathname.substring(1);

  const videoSections = useVideoSections();
  const sectionId = videoSections[sectionName].id;
  const videoList = useVideos({ sectionId }) || [];

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

  const headerLabelName = "btnVideoTitle_" + sectionName;

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <ScreenHeader text={label(headerLabelName)} />

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
