import React from "react";
import { useParams } from "react-router-dom";

import ScreenHeader from "../components/ScreenHeader";
import AnimatedFrame from "../components/AnimatedFrame";

export default function Opener() {
  const { type } = useParams();

  return (
    <AnimatedFrame>
      <ScreenHeader text={type} />
    </AnimatedFrame>
  );
}
