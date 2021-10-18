import React from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import MenuButton from "../components/MenuButton";
import MenuHeader from "../components/MenuHeader";

export default function Menu() {
  return (
    <AnimatedFrame scrollable>
      <MenuHeader>Prima di tutto</MenuHeader>

      <MenuButton
        to="map"
        title="Come arrivare"
        caption="Via Google maps"
        icon="fas fa-location-arrow"
      />
      <MenuButton
        to="video"
        title="Trova il tuo ingresso"
        caption="Un video vocale ti spiega"
        icon="fa fa-crosshairs"
      />

      <MenuHeader>Poi con calma</MenuHeader>

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
      <MenuButton to="chat" title="Chatta con Giuseppe" icon="fas fa-comment" />

      <button onClick={history.back}>back</button>
    </AnimatedFrame>
  );
}
