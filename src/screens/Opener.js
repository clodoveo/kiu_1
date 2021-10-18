import React from "react";
import { useParams } from "react-router-dom";

import AnimatedFrame from "../components/AnimatedFrame";

export default function Opener() {
  const { type } = useParams();

  return <AnimatedFrame>{type}</AnimatedFrame>;
}
