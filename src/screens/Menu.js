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
  useVideoSection,
  useInfo,
  useHouseSection,
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

  const videoSection = useVideoSection("video");
  const beachSection = useVideoSection("beach");
  const poolSection = useVideoSection("pool");

  const infoSection = useHouseSection("info");
  const servicesSection = useHouseSection("services");
  const equipmentSection = useHouseSection("equipment");

  if (
    !videoSection.list ||
    !beachSection.list ||
    !poolSection.list ||
    !infoSection.list ||
    !servicesSection.list ||
    !equipmentSection.list
  ) {
    return <LoadingSpinner />;
  }

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <MenuHeader>{label("firstOfAll")}</MenuHeader>
      <MenuButton
        to="map"
        title={label("btnNavigatorTitle")}
        caption={label("btnNavigatorCaption")}
        icon={label("btnNavigatorIcon")}
        color="green"
      />

      {videoSection.list.length > 0 && (
        <MenuButton
          to="video"
          title={videoSection.title}
          caption={videoSection.caption}
          icon={videoSection.iconClass}
          color="dark-green"
        />
      )}

      {infoSection.list.length > 0 && (
        <MenuButton
          to={infoSection.path}
          title={infoSection.title}
          caption={infoSection.caption}
          icon={infoSection.iconClass}
          color="grey-green"
        />
      )}

      {servicesSection.list.length > 0 && (
        <MenuButton
          to={servicesSection.path}
          title={servicesSection.title}
          caption={servicesSection.caption}
          icon={servicesSection.iconClass}
          color="grey-green"
        />
      )}

      {equipmentSection.list.length > 0 && (
        <MenuButton
          to={equipmentSection.path}
          title={equipmentSection.title}
          caption={equipmentSection.caption}
          icon={equipmentSection.iconClass}
          color="grey-green"
        />
      )}

      {poolSection.list.length > 0 && (
        <MenuButton
          to="pool"
          title={poolSection.title}
          caption={poolSection.caption}
          icon={poolSection.iconClass}
          color="dark-green"
        />
      )}

      {beachSection.list.length > 0 && (
        <MenuButton
          to="beach"
          title={beachSection.title}
          caption={beachSection.caption}
          icon={beachSection.iconClass}
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
    </AnimatedFrame>
  );
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
