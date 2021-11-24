import React, { useState } from "react";
import styled from "styled-components";

import { CloudinaryVideo } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

import { scale } from "@cloudinary/url-gen/actions/resize";

export default function ({ path, cloudName, mediaWidth }) {
  const video = new CloudinaryVideo(path, {
    cloudName: cloudName,
  });

  video.resize(scale().width(mediaWidth));

  return (
    <VideoPlayer>
      <AdvancedVideo cldVid={video} controls />
    </VideoPlayer>
  );
}

const VideoPlayer = styled.div`
  width: 100%;

  video {
    width: 100%;
  }
`;
