import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import MenuButton from "../components/MenuButton";
import MenuHeader from "../components/MenuHeader";
import WizardCircleButton from "../components/WizardCircleButton";
import LoadingSpinner from "../components/LoadingSpinner";

import { ConfigContext } from "../contexts/ConfigContext";
import {
  useLabel,
  useVideos,
  useVideoSections,
  useInfo,
  useServices,
  useGuides,
} from "../hooks/useAppData";
import useAnimationMode from "../hooks/useAnimationMode";

export default function Menu() {
  const history = useHistory();

  const label = useLabel();

  const { guideId } = useContext(ConfigContext);

  const guide = useGuides().byId(guideId);

  const animationMode = useAnimationMode([
    { fromKey: "start", mode: "slideFromRightAndStay" },
  ]);

  // preload data
  useInfo();
  useServices();

  const videoSections = useVideoSections();

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <MenuHeader>{label("firstOfAll")}</MenuHeader>
      <MenuButtons />
    </AnimatedFrame>
  );

  function MenuButtons() {
    if (!videoSections) {
      return <LoadingSpinner />;
    }

    return (
      <>
        <MenuButton
          to="map"
          title={label("btnNavigatorTitle")}
          caption={label("btnNavigatorCaption")}
          icon={label("btnNavigatorIcon")}
          color="green"
        />

        {videoSections.video.title && (
          <MenuButton
            to="video"
            title={videoSections.video.title}
            caption={videoSections.video.caption}
            icon={videoSections.video.iconClass}
            color="dark-green"
          />
        )}

        <MenuButton
          to="house"
          title={label("btnHouseTitle")}
          caption={label("btnHouseCaption")}
          icon={label("btnHouseIcon")}
          color="grey-green"
        />

        {videoSections.beach.title && (
          <MenuButton
            to="beach"
            title={videoSections.beach.title}
            caption={videoSections.beach.caption}
            icon={videoSections.beach.iconClass}
            color="dark-green"
          />
        )}

        {videoSections.pool.title && (
          <MenuButton
            to="pool"
            title={videoSections.pool.title}
            caption={videoSections.pool.caption}
            icon={videoSections.pool.iconClass}
            color="dark-green"
          />
        )}

        <MenuHeader>{label("then")}</MenuHeader>

        <MenuButton
          to="info"
          title={label("btnInfoTitle")}
          caption={label("btnInfoCaption")}
          icon={label("btnInfoIcon")}
          color="yellow"
        />
        <MenuButton
          to="services"
          title={label("btnServiceTitle")}
          caption=""
          icon={label("btnServiceIcon")}
          color="yellow"
        />

        <ButtonWrapper>
          <Link to="/">{label("restart")}</Link>

          {guide && (
            <div>
              <WizardCircleButton
                hasBorder={false}
                image={guide.picture}
                onClick={() => history.push("/chat")}
                badge="https://giomiapp.terotero.it/img/original/app/chat-icon.png"
              />
            </div>
          )}
        </ButtonWrapper>
      </>
    );
  }
}

const ButtonWrapper = styled.div`
  margin: 3em 15px 2em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .imgWrapper {
    border: 7px solid #265a32;
    box-shadow: 5px 5px 10px #888;
  }
`;
