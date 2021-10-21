import React, { useEffect, useContext, memo } from "react";
import { useHistory } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import InfoCards from "../components/InfoCards";
import VideoPlayer from "../components/VideoPlayer";

import { useQuery } from "react-query";

// evita render ripetuti
const MemoVideo = memo(VideoPlayer)

export default function() {
  let body = <LoadingSpinner />

  const items = getListData()

  if (items) {
    body = <InfoCards items={items} coverComponent={MemoVideo} />
  }

  return (
    <AnimatedFrame scrollable>
      <ScreenHeader text="Trova il tuo ingresso" />
      {body}
      <ScreenFooter />
    </AnimatedFrame>
  );
}


function getListData() {
  const { status, data } = useQuery("video", () => fakeData)
  return data
}

const fakeData = [
  {
    cloudName: "dlhsryof2",
    path: "keepitup/IMG_0644_mmnuds.mov",
    ratio: 9 / 16,
    title: "Video 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    cloudName: "dlhsryof2",
    path: "keepitup/IMG_0644_mmnuds.mov",
    ratio: 9 / 16,
    title: "Video 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]
