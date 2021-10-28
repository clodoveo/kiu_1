import React, { useContext } from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import MenuButton from "../components/MenuButton";
import MenuHeader from "../components/MenuHeader";
import WizardCircleButton from "../components/WizardCircleButton"

import { ConfigContext } from "../contexts/ConfigContext";
import { useLabels } from "../hooks/useAppData"
import useAnimationMode from "../hooks/useAnimationMode"

export default function Menu() {
  const history = useHistory();

  const label = useLabels()

  const { guide } = useContext(ConfigContext)

  const guideLabel = label('btnChatTitle') + " " + guide.name

  const animationMode = useAnimationMode([
    { fromKey: "start", mode: "slideFromRightAndStay" }
  ])

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <MenuHeader>{label('firstOfAll')}</MenuHeader>

      <MenuButton
        to="map"
        title={label('btnNavigatorTitle')}
        caption={label('btnNavigatorCaption')}
        icon={label('btnNavigatorIcon')}
        color="green"
      />
      <MenuButton
        to="video"
        title={label('btnVideoTitle')}
        caption={label('btnVideoCaption')}
        icon={label('btnVideoIcon')}
        color="grey-green"
      />

      <MenuHeader>{label('then')}</MenuHeader>

      <MenuButton
        to="info"
        title={label('btnInfoTitle')}
        caption={label('btnInfoCaption')}
        icon={label('btnInfoIcon')}
        color="green"
      />
      <MenuButton
        to="services"
        title={label('btnServiceTitle')}
        caption=""
        icon={label('btnServiceIcon')}
        color="yellow"
      />

      <ButtonWrapper>
        <WizardCircleButton
          hasBorder={false}
          image={guide.picture}
          onClick={() => history.push('/chat')}
        />

        <img
          className="badge"
          src="https://giomiapp.terotero.it/img/original/app/chat-icon.png"
        />
      </ButtonWrapper>
    </AnimatedFrame>
  )
}

const ButtonWrapper = styled.div `
  text-align: right;
  margin: 3em 15px 2em;
  position: relative;

  .imgWrapper {
    border: 7px solid #265A32;
    box-shadow: 5px 5px 10px #888;
  }

  .badge {
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border-radius: 50% 50% 50% 0;
    box-shadow: 5px 5px 10px #888;
  }
`