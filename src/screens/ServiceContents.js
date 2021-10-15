import { useParams } from "react-router-dom";

import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import Article from "../components/Article";

import services from "../api/services";
console.log(services);

export default function ServiceContents() {
  const { id: service } = useParams(),
    serviceData = services.byId(service);

  return (
    <>
      <ScreenHeader text={serviceData.title} />
      <Article {...serviceData} />
      <ScreenFooter />
    </>
  );
}
