import React, { useState } from "react";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import ArticlesList from "../components/ArticlesList";

import services from "../api/services";

export default function ServicesList() {
  const [servicesData, setServicesData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const token = "123123123";
  services.all(token).then(setServicesData).catch(setErrorMessage);

  const headerText = "I servizi della vacanza";

  let body = "caricamento...";

  if (servicesData) {
    body = <ArticlesList data={servicesData} />;
  } else if (errorMessage) {
    body = <div>Error: {errorMessage}</div>;
  }

  return (
    <AnimatedFrame scrollable>
      <ScreenHeader text={headerText} />
      {body}
      <ScreenFooter />
    </AnimatedFrame>
  );
}
