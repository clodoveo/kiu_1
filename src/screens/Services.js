import React from "react";
import { useParams } from "react-router-dom";

import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import ArticlesList from "../components/ArticlesList";
import Article from "../components/Article";

export default function Services() {
  const { id: service } = useParams();

  let serviceData,
    headerText = "I servizi della vacanza";

  if (service) {
    serviceData = getServiceData(service);
    headerText = serviceData.title;
  }

  return (
    <>
      <ScreenHeader text={headerText} />

      {serviceData ? (
        <Article {...serviceData} />
      ) : (
        <ArticlesList data={servicesData} />
      )}

      <ScreenFooter />
    </>
  );
}

function getServiceData(id) {
  for (let index = 0; index < servicesData.length; index++) {
    const service = servicesData[index];

    if (service.id === id) {
      return service;
    }
  }
}

const servicesData = [
  {
    id: "beach",
    linkTo: "services/beach",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-spiaggia.jpg",
    title: "La spiaggia",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed.",
    picture:
      "https://giomiapp.terotero.it/img/original/appdemo/article-spiaggia.jpg",
    content:
      "<h2 class='title'>La spiaggia</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><p>Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><h2 class='title'>Le strutture</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><h2 class='title'>Info e contatti</h2><strong>Gli orari sono</strong><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p><strong>Numeri</strong><br><p>tel 8r7483884<br>mail djdj@sjksjsjs.ckjsjkskj<br>whatsap 857473873</p>"
  },
  {
    id: "gym",
    linkTo: "services/gym",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-palestra.jpg",
    title: "La palestra",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "spa",
    linkTo: "services/spa",
    thumb: "https://giomiapp.terotero.it/img/original/appdemo/services-spa.jpg",
    title: "Spa",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "pool",
    linkTo: "services/pool",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-piscina.jpg",
    title: "Piscina",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "bazar",
    linkTo: "services/bazar",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-bazar.jpg",
    title: "Bazar",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  }
];
