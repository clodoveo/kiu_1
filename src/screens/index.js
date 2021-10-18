import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Splash from "./Splash";
import LanguageSelector from "./LanguageSelector";
import GuideSelector from "./GuideSelector";
import Start from "./Start";
import Menu from "./Menu";
import Opener from "./Opener";
import Info from "./Info";
import ServicesList from "./ServicesList";
import ServiceContents from "./ServiceContents";
import VideoPlayer from "./VideoPlayer";

const routes = [
  { path: "/", component: Splash, className: "splash" },
  { path: "/language", component: LanguageSelector, className: "language" },
  { path: "/guide", component: GuideSelector, className: "guide" },
  { path: "/guide", component: GuideSelector, className: "guide" },
  { path: "/start", component: Start, className: "start" },
  { path: "/menu", component: Menu },
  { path: "/opener/:type", component: Opener },
  { path: "/info", component: Info },
  { path: "/services", component: ServicesList },
  { path: "/services/:id", component: ServiceContents },
  { path: "/video", component: VideoPlayer }
];

export default function () {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
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
