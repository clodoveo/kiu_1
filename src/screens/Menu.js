import React, { useContext } from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import MenuButton from "../components/MenuButton";
import MenuHeader from "../components/MenuHeader";

import { ConfigContext } from "../contexts/ConfigContext";
import { useLabels } from "../hooks/useAppData"

export default function Menu() {
  const { language, guide } = useContext(ConfigContext)

  const { byName: label } = useLabels()

  const guideLabel = label('btnChatTitle') + ' ' + guide.name

  return (
    <AnimatedFrame scrollable>
      <Back />

      <MenuHeader>
        {label('firstOfAll')}
      </MenuHeader>

      <MenuButton
        to="map"
        title={label('btnNavigatorTitle')}
        caption={label('btnNavigatorCaption')}
        icon={label('btnNavigatorIcon')}
      />
      <MenuButton
        to="video"
        title={label('btnVideoTitle')}
        caption={label('btnVideoCaption')}
        icon={label('btnVideoIcon')}
      />

      <MenuHeader>
        {label('then')}
      </MenuHeader>

      <MenuButton
        to="info"
        title={label('btnInfoTitle')}
        caption={label('btnInfoCaption')}
        icon={label('btnInfoIcon')}
      />
      <MenuButton
        to="services"
        title={label('btnServiceTitle')}
        caption=""
        icon={label('btnServiceIcon')}
      />

      <MenuButton
        to="chat"
        title={guideLabel}
        icon={label('btnChatIcon')}
      />
    </AnimatedFrame>
  )
}

const Back = styled(({ className }) => {
  const history = useHistory();

  return (
    <button className={className} onClick={history.goBack}>
      <i className="fas fa-chevron-left" />
    </button>
  );
})`
  background: #265a327a;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  left: 1em;
  top: 1em;
`;
