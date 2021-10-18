import { React, useContext } from "react";
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";

import WizardButton from "../components/WizardButton";
import WizardWrapper from "../components/WizardWrapper";

import { ConfigContext } from "../contexts/ConfigContext";

export default function Splash() {
  const { language, guide } = useContext(ConfigContext);

  return (
    <AnimatedFrame>
      <WizardWrapper logoTop="40%">
        <StyledDiv>
          <h1>{language}</h1>
          <h1>{guide}</h1>

          <WizardButton to="/language" text="Accedi" color="yellow" />
        </StyledDiv>
      </WizardWrapper>
    </AnimatedFrame>
  );
}

const StyledDiv = styled.div`
  position: absolute;
  bottom: 15%;
  width: 100%;
  text-align: center;
`;
