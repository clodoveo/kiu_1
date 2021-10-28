import "./styles.css";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import styled from "styled-components";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { isMobile } from "react-device-detect";

import { ConfigContext } from "./contexts/ConfigContext";
import { AppContext } from "./contexts/AppContext";

import { useLabels, useGuides, useAccount } from "./hooks/useAppData"

import ScreensRouter from "./ScreensRouter";

// Create a client
const queryClient = new QueryClient();

const defaultGuide = { "id": null, "name": "", "picture": "" }

export default function() {
  // id lingua
  const [language, setLanguage] = useState(null);

  // dati della guida scelta
  const [guide, setGuide] = useState(defaultGuide);

  const fullScreenHandle = useFullScreenHandle();

  const config = {
    language,
    setLanguage,
    guide,
    setGuide,
    enterFullScreen: () => {
      if (isMobile && !fullScreenHandle.active) {
        fullScreenHandle.enter()
      }
    }
  }

  // ricorda la route precedente per gestire le animazioni
  const [prevLocation, setPrevLocation] = useState({})
  const appClient = { prevLocation, setPrevLocation }

  return (
    <AppContext.Provider value={appClient}>
      <ConfigContext.Provider value={config}>
        <QueryClientProvider client={queryClient}>
          <FullScreen handle={fullScreenHandle}>
            <App className="app" />
          </FullScreen>

          {/*<ReactQueryDevtools initialIsOpen />*/}
        </QueryClientProvider>
      </ConfigContext.Provider>
    </AppContext.Provider>
  );
}

const App = styled(({ className }) => {
  return (
    <div className={className}>
      {/*<AddToHomeScreen />*/}

      <Router>
        <ScreensRouter />
      </Router>
    </div>
  )
})
`
  max-width: 70vh;
  position: relative;
  margin: auto;
  height: 100vh;
  overflow: hidden;
`;