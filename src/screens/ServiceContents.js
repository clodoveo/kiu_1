import { useParams } from "react-router-dom";

import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import Article from "../components/Article";

import services from "../api/services";

export default function ServiceContents() {
  const { id } = useParams(),
    serviceData = services.byId(id);

  return (
    <>
      <ScreenHeader text={serviceData.title} />
      <Article {...serviceData} />
      <ScreenFooter />
    </>
  );
}
