import { useState } from "react";
import { useParams } from "react-router-dom";

import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import Article from "../components/Article";

import services from "../api/services";

export default function ServiceContents() {
  const { id } = useParams();

  const [serviceData, setServiceData] = useState(null);
  services.byId(id).then(setServiceData);

  let body = "caricamento...";
  if (serviceData) {
    body = <Article {...serviceData} />;
  }

  return (
    <>
      <ScreenHeader text={serviceData && serviceData.title} />
      {body}
      <ScreenFooter />
    </>
  );
}
