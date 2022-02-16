import React, { useState } from "react";
import styled from "styled-components";

import { AdvancedVideo, AdvancedImage } from "@cloudinary/react";
import {
  CloudinaryVideo,
  CloudinaryImage,
  Transformation,
} from "@cloudinary/url-gen";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { reverse } from "@cloudinary/url-gen/actions/effect";
import { video, image } from "@cloudinary/url-gen/qualifiers/source";
import { volume } from "@cloudinary/url-gen/actions/videoEdit";

import { scale } from "@cloudinary/url-gen/actions/resize";

export default function ({ path, cloudName, mediaWidth, audio, resourcetype }) {
  let media;
  switch (resourcetype) {
    case "video":
      media = new CloudinaryVideo(path, { cloudName });
      media.resize(scale().width(mediaWidth));

      if (audio) {
        media.videoEdit(new Transformation().effect(volume("mute")));
        media.overlay(source(video(audio)));
      }
      break;

    case "image":
      let audioPath = audio.split(".");
      audioPath = audioPath.slice(0, audioPath.length - 1).join(".");

      media = new CloudinaryVideo(audioPath, { cloudName });

      media.overlay(source(image(path)));
      break;
  }

  const style = {
    // background: `url("")`
  };

  return (
    <VideoPlayer style={style}>
      <AdvancedVideo cldVid={media} controls />
    </VideoPlayer>
  );
}

const VideoPlayer = styled.div`
  width: 100%;

  video {
    width: 100%;
  }
`;
