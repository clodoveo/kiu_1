import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect, useLocation, useHistory, matchPath } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ConfigContext } from "./contexts/ConfigContext";

import Splash from "./screens/Splash";
import LanguageSelector from "./screens/LanguageSelector";
import GuideSelector from "./screens/GuideSelector";
import Start from "./screens/Start";
import Menu from "./screens/Menu";
import Chat from "./screens/Chat";
import Map from "./screens/Map";
import Info from "./screens/Info";
import ServicesList from "./screens/ServicesList";
import ServiceContents from "./screens/ServiceContents";
import VideoPlayer from "./screens/VideoPlayer";

// se skipLanguage:true il valore di language non è richiesto

const routes = [
  { path: "/", exact: true, component: Splash, skipLanguage: true },
  { path: "/language", exact: true, component: LanguageSelector, className: "language", skipLanguage: true },
  { path: "/guide", exact: true, component: GuideSelector, className: "guide" },
  { path: "/guide", exact: true, component: GuideSelector, className: "guide" },
  { path: "/start", exact: true, component: Start, className: "start" },
  { path: "/menu", exact: true, component: Menu },
  { path: "/chat", exact: true, component: Chat },
  { path: "/map", exact: true, component: Map },
  { path: "/info", exact: true, component: Info },
  { path: "/services", exact: true, component: ServicesList },
  { path: "/services/:id", exact: true, component: ServiceContents },
  { path: "/video", exact: true, component: VideoPlayer },

  // rimanda tutto il resto alla root
  { path: "/", component: NotFound, skipLanguage: true }
];

function NotFound() {
  return <Redirect to="/" />
}

export default function() {
  const location = useLocation();
  const history = useHistory();

  const { language } = useContext(ConfigContext)
  requireLanguage(location, history, language);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        {routes.map(({ path, className, component, exact }) => (
          <Route
            key={path}
            exact={exact}
            path={path}
            className={className}
            component={component}
          />
        ))}
      </Switch>
    </AnimatePresence>
  );
}

function requireLanguage(location, history, language) {
  // rimanda a /language se serve sapere la lingua

  useEffect(() => {
    for (let route of routes) {
      if(
        language === null &&
        route.skipLanguage !== true &&
        matchPath(location.pathname, route)
      ) {
        console.log('redirect: missing language');
        history.push('/language')
      }
    }
  }, [language])
}
