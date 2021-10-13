import React from "react";
import MenuButton from "../components/MenuButton";

export default function Menu() {
  return (
    <>
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
      <MenuButton
        title="cicicoco"
        caption="el can?"
        icon="fas fa-umbrella-beach"
      />
    </>
  );
}
