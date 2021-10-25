import React, { useState } from "react";
import styled from "styled-components";

import { CloudinaryVideo } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

import { scale } from "@cloudinary/url-gen/actions/resize";

export default function({ path, cloudName, width }) {
  width = width || 480

  const video = new CloudinaryVideo(path, {
    cloudName: cloudName
  });

  video.resize(scale().width(width));

  return (
    <VideoPlayer>
      <AdvancedVideo cldVid={video} controls />
    </VideoPlayer>
  );
}

const VideoPlayer = styled.div`
  video {
    width: 100%;
  }
`
