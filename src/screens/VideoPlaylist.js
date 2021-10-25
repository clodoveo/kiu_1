import React, { useState, useEffect, memo } from "react";
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
  const [items, setItems] = useState(null)

  const { data } = useQuery("video", getData)

  useEffect(() => {
    if (data) {
      setItems(data)
    }
  })

  const body = items ?
    <InfoCards items={items} coverComponent={MemoVideo} /> :
    <LoadingSpinner />

  return (
    <AnimatedFrame scrollable>
      <ScreenHeader text="Trova il tuo ingresso" />
      {body}
      <ScreenFooter />
    </AnimatedFrame>
  );
}

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeData)
    })
  })
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
