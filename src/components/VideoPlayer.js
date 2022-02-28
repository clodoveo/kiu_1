import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { AdvancedVideo, AdvancedImage } from "@cloudinary/react";
import {
  Cloudinary,
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
  const videoRef = useRef();

  let media;

  switch (resourcetype) {
    case "video":
      media = new CloudinaryVideo(path, { cloudName });

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

  return (
    <StyledPlayer>
      <AdvancedVideo
        ref={videoRef}
        cldVid={media}
        controls
        onPause={pauseHandler}
      />
      <JumpControls getVideoEl={getVideoEl} onJump={jump} />
    </StyledPlayer>
  );

  function getVideoEl() {
    if (!videoRef.current) {
      return;
    }

    return videoRef.current.videoRef.current;
  }

  function pauseHandler(event) {}

  function jump(offset) {
    const videoEl = getVideoEl();

    if (!videoEl) {
      return;
    }

    videoEl.currentTime = getSeekTime(offset, videoEl);
    videoEl.play();
  }

  function getSeekTime(offset, videoEl) {
    if (videoEl.currentTime + offset < 0) {
      return 0;
    }

    if (videoEl.currentTime + offset >= videoEl.duration) {
      return videoEl.duration;
    }

    return videoEl.currentTime + offset;
  }
}

function JumpControls({ onJump, getVideoEl }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const videoEl = getVideoEl();
    if (!videoEl) {
      return;
    }

    videoEl.addEventListener("pause", () => {
      setIsVisible(true);
    });

    videoEl.addEventListener("play", () => {
      setIsVisible(false);
    });
  }, []);

  const style = {
    display: isVisible ? "block" : "none",
  };

  return (
    <div style={style}>
      <JumpControl offset={-10} direction="left" onClick={jumpHandler} />
      <JumpControl offset={10} direction="right" onClick={jumpHandler} />
    </div>
  );

  function jumpHandler(offset) {
    onJump(offset);
  }
}

function JumpControl({ onClick, offset, direction }) {
  const className = "jump " + direction;

  return <div className={className} onClick={() => onClick(offset)}></div>;
}

const StyledPlayer = styled.div`
  width: 100%;
  position: relative;

  video {
    width: 100%;
  }

  .jump {
    position: absolute;
    top: 0;
    bottom: 80px;
    // background: #f008;
    font-family: "Font Awesome 6 free";
    font-weight: 900;

    :before {
      position: absolute;
      left: calc(50% - 0.5em);
      top: calc(50% - 0.5em);
      color: #fff;
    }
    &.left {
      left: 0;
      right: 60%;

      :before {
        content: "\f04a";
      }
    }
    &.right {
      left: 60%;
      right: 0;

      :before {
        content: "\f04e";
      }
    }
  }
`;
