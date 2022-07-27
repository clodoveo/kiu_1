import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Logo from "./WizardLogo";

export default function ({ children, logoTop, logoPayoff }) {
  return (
    <WizardWrapper>
      {!logoPayoff && false && <Back />}

      <Logo top={logoTop} payoff={logoPayoff} />
      {children}
    </WizardWrapper>
  );
}

const widardBg =
  "url('https://giomiapp.terotero.it/img/original/app/sfondo.png')";

const WizardWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${widardBg} no-repeat center;
  background-size: cover;

  .wizard-middle {
    position: absolute;
    left: 0;
    top: 25vh;
    text-align: center;
    width: 100%;
    color: #ffffff;
  }
`;

const Back = styled(({ className }) => {
  const history = useHistory();
  return (
    <button className={className} onClick={() => history.goBack()}>
      <i className="fas fa-chevron-left" />
    </button>
  );
})`
  background: #fff8;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 23px;
  margin: 12px;
  color: #265a32;
  cursor: pointer;
`;
