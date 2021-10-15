import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import ArticlesList from "../components/ArticlesList";

import services from "../api/services";

export default function ServicesList() {
  const headerText = "I servizi della vacanza";

  return (
    <>
      <ScreenHeader text={headerText} />
      <ArticlesList data={services.all()} />
      <ScreenFooter />
    </>
  );
}
