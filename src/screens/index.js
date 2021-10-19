import React, { useEffect, useContext } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ConfigContext } from "../contexts/ConfigContext";

import Splash from "./Splash";
import LanguageSelector from "./LanguageSelector";
import GuideSelector from "./GuideSelector";
import Start from "./Start";
import Menu from "./Menu";
import Chat from "./Chat";
import Map from "./Map";
import Info from "./Info";
import ServicesList from "./ServicesList";
import ServiceContents from "./ServiceContents";
import VideoPlayer from "./VideoPlayer";

const routes = [
  { path: "/", component: Splash },
  { path: "/language", component: LanguageSelector, className: "language" },
  { path: "/guide", component: GuideSelector, className: "guide" },
  { path: "/guide", component: GuideSelector, className: "guide" },
  { path: "/start", component: Start, className: "start" },
  { path: "/menu", component: Menu },
  { path: "/chat", component: Chat },
  { path: "/map", component: Map },
  { path: "/info", component: Info },
  { path: "/services", component: ServicesList },
  { path: "/services/:id", component: ServiceContents },
  { path: "/video", component: VideoPlayer }
];

export default function () {
  const location = useLocation();
  const history = useHistory();

  const { language } = useContext(ConfigContext)
  requireLanguage(location, history, language);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        {routes.map(({ path, className, component }) => (
          <Route
            key={path}
            exact
            path={path}
            className={className}
            component={component}
          />
        ))}
      </Switch>
    </AnimatePresence>
  );
}

// rimanda a /language se manca la lingua
function requireLanguage(location, history, language) {
  useEffect(() => {
    if (
      language === null &&
      location.pathname !== '/' &&
      location.pathname !== '/language'
    ) {
      console.log('redirect: missing language');
      history.push('/language')
    }
  }, [language])
}
