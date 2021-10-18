import React from "react";
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import WizardButton from "../components/WizardButton";

export default function ({ title, text, link }) {
  if (link) {
    link = <WizardButton to={link.to} text={link.label} color="yellow" />;
  }

  return (
    <AnimatedFrame>
      <Opener>
        <h1 className="title">{title}</h1>
        <p>{text}</p>
        {link}
      </Opener>
    </AnimatedFrame>
  );
}

const Opener = styled.div`
  text-align: center;
  background: #265a32;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    color: #fff;
  }
`;
