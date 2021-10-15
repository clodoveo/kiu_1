import React from "react";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";

import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";

function ServicesList() {
  return servicesData.map((service) => (
    <div key={service.id}>
      <h2>
        <Link to={"services/" + service.id}>{service.title}</Link>
      </h2>
    </div>
  ));
}

function Service({ title }) {
  return <h1>{title}</h1>;
}

export default function Services() {
  const { id: service } = useParams();

  let serviceData;
  if (service) {
    serviceData = getServiceData(service);
  }

  return (
    <Styled>
      <ScreenHeader text="I servizi della vacanza" />

      {serviceData ? <Service {...serviceData} /> : <ServicesList />}

      <ScreenFooter />
    </Styled>
  );
}

const Styled = styled.div``;

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
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-spiaggia.jpg",
    title: "La spiaggia",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "gym",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-palestra.jpg",
    title: "La palestra",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "spa",
    thumb: "https://giomiapp.terotero.it/img/original/appdemo/services-spa.jpg",
    title: "Spa",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "pool",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-piscina.jpg",
    title: "Piscina",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "bazar",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-bazar.jpg",
    title: "Bazar",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  }
];
