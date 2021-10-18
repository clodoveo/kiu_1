import React from "react";
import { useParams } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";

export default function Opener() {
  const { type } = useParams();

  return (
    <AnimatedFrame>
      <ScreenHeader text={type} />
    </AnimatedFrame>
  );
}
