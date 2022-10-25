import React, { useState, useEffect, useContext } from "react";
import {
  Route,
  Switch,
  Redirect,
  Link,
  useLocation,
  useHistory,
  withRouter,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { ConfigContext } from "./contexts/ConfigContext";
import { AppContext } from "./contexts/AppContext";

import AnimatedFrame from "./components/AnimatedFrame";

import { updatePrevLocation } from "./hooks/updatePrevLocation";
import { useLazyRedirect } from "./hooks/useLazyRedirect";

import routes, { routeFromUrl } from "./routes";

function ScreensRouter({ location, history, match }) {
  useLazyRedirect(AppContext);

  const { langId, guideId } = useContext(ConfigContext);

  const route = routeFromUrl(location.pathname);

  useEffect(() => {
    // rimanda a /guide se serve sapere la guida
    routeRequires(route, guideId, "skipGuide", () => history.push("/guide"));

    // rimanda a /language se serve sapere la lingua
    routeRequires(route, langId, "skipLanguage", () =>
      history.push("/language")
    );
  }, [route.key]);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        {routes.map(({ key, path, exact, component }) => {
          const props = { key, path, exact };

          return (
            <Route {...props}>
              <ScreenWrapper>{React.createElement(component)}</ScreenWrapper>
            </Route>
          );
        })}
      </Switch>
    </AnimatePresence>
  );
}

const ScreenWrapper = withRouter(({ children }) => {
  // componente necessario per gestire l'animazione
  // in base passagi tra url diverse
  updatePrevLocation();

  return <> {children} </>;

  // simple test
  return (
    <AnimatedFrame>
      {routes.map((route) => (
        <div key={route.key}>
          <Link to={route.path}>{route.key}</Link>
        </div>
      ))}
    </AnimatedFrame>
  );
});

function routeRequires(route, requiredValue, paramName, callback) {
  if (route[paramName] !== true && requiredValue === null) {
    console.log(`unmatched rule '${paramName}'`);
    callback();
  }
}

export default withRouter(ScreensRouter);
