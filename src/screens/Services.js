import React from "react";
import { useParams } from "react-router-dom";

export default function Services() {
  const { id: service } = useParams();
  return <div>Services:{service}</div>;
}
