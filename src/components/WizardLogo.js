import React from "react";
import styled from "styled-components";

const images = {
  simple: "https://giomiapp.terotero.it/img/original/app/logo.png",
  payoff: "https://giomiapp.terotero.it/img/original/app/logoAndPayoff.png"
};

export default styled(({ className, top, payoff }) => {
  const style = { top };
  const imageUrl = payoff ? images.payoff : images.simple;

  return (
    <div className={"logo " + className} style={style}>
      <img src={imageUrl} alt="logo" />
    </div>
  );
})`
  position: absolute;
  width: 100%;
  text-align: center;
`;
