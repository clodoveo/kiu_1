import React, { useEffect, useContext, memo } from "react";
import { useHistory } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import InfoCards from "../components/InfoCards";
import VideoPlayer from "../components/VideoPlayer";

import { useQuery } from "react-query";

export default function() {
  let body = <LoadingSpinner />

  const items = getListData()

  if (items) {
    body = <InfoCards items={items} coverComponent={memo(VideoPlayer)} />
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
    title: "Keepitup",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    cloudName: "demo",
    path: "samples/elephants",
    ratio: 9 / 16,
    title: "Elephants",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    cloudName: "demo",
    path: "samples/sea-turtle",
    ratio: 9 / 16,
    title: "Turtle",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]
