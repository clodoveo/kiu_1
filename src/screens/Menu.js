import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import MenuButton from "../components/MenuButton";
import MenuHeader from "../components/MenuHeader";
import WizardCircleButton from "../components/WizardCircleButton";

import { ConfigContext } from "../contexts/ConfigContext";
import {
  useLabel,
  useVideos,
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
  useVideos();
  useInfo();
  useServices();

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
      <MenuButton
        to="video"
        title={label("btnVideoTitle")}
        caption={label("btnVideoCaption")}
        icon={label("btnVideoIcon")}
        color="dark-green"
      />
      <MenuButton
        to="house"
        title={label("btnHouseTitle")}
        caption={label("btnHouseCaption")}
        icon={label("btnHouseIcon")}
        color="grey-green"
      />

      <MenuHeader>{label("then")}</MenuHeader>

      <MenuButton
        to="info"
        title={label("btnInfoTitle")}
        caption={label("btnInfoCaption")}
        icon={label("btnInfoIcon")}
        color="dark-green"
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
