import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Logo from "./WizardLogo";

export default function WizardWrapper(props) {
  const { children, logoTop, logoPayoff } = props;

  return (
    <div
      style={{
        backgroundImage:
          "url('https://giomiapp.terotero.it/img/original/app/sfondo.png')",
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Logo top={logoTop} payoff={logoPayoff} />

      <Back />

      {children}
    </div>
  );
}

const Back = styled(({ className }) => {
  const history = useHistory();
  return (
    <button className={className} onClick={() => history.goBack()}>
      <i class="fas fa-chevron-left" />
    </button>
  );
})`
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 12px;
  color: #265a32;
  font-size: 18px;
  cursor: pointer;
`;
