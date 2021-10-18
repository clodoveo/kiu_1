import React from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import MenuButton from "../components/MenuButton";
import MenuHeader from "../components/MenuHeader";

export default function Menu() {
  return (
    <AnimatedFrame>
      <MenuHeader className="title">Prima di tutto</MenuHeader>

      <MenuButton
        to="opener/come arrivare"
        title="Come arrivare"
        caption="via"
        icon="fa fa-trash"
      />
      <MenuButton
        to="opener/chatta"
        title="chatta"
        caption="mi si ?"
        icon="fa fa-trash"
      />
      <MenuButton
        to="opener/video"
        title="video"
        caption="ti no?"
        icon="fa fa-trash"
      />
      <MenuHeader className="title">Poi con calma</MenuHeader>

      <MenuButton
        to="info"
        title="Informazioni utili"
        caption="Cose da fare e dintorni"
        icon="fas fa-info-circle"
      />
      <MenuButton
        to="services"
        title="I Servizi della vacanza"
        icon="fas fa-umbrella-beach"
      />

      <button onClick={history.back}>back</button>
    </AnimatedFrame>
  );
}
