import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Opener() {
  const { type } = useParams();

  return <div>{type}</div>;
}
