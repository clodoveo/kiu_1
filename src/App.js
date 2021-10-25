import "./styles.css";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import AddToHomeScreen from '@ideasio/add-to-homescreen-react';

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { isMobile } from "react-device-detect";

import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigContext } from "./contexts/ConfigContext";

import { useLabels } from "./hooks/useAppData";

import ScreensRouter from "./ScreensRouter";

// Create a client
const queryClient = new QueryClient();

// TODO rimuovere i default: servono solo in DEV
const defaultGuide = {
  "id": "1",
  "name": "Paola",
  "picture": "https://giomiapp.terotero.it/img/original/app/agente1.png"
}

const defaultLanguageId = 1

export default function () {
  const [language, setLanguage] = useState(defaultLanguageId);
  const [guide, setGuide] = useState(defaultGuide);
  const [labels, setLabels] = useState(null);

  const fullScreenHandle = useFullScreenHandle();

  const config = {
    language,
    setLanguage,
    guide,
    setGuide,
    labels,
    setLabels,
    enterFullScreen: () => {
      if (isMobile && ! fullScreenHandle.active) {
        fullScreenHandle.enter()
      }
    }
  };

  return (
    <ConfigContext.Provider value={config}>
      <QueryClientProvider client={queryClient}>
        <FullScreen handle={fullScreenHandle}>
          <App className="app" />
        </FullScreen>
      </QueryClientProvider>
    </ConfigContext.Provider>
  );
}

const App = styled(({ className }) => {
  const { byName: label } = useLabels()

  return (
    <div className={className}>
      <AddToHomeScreen />
      <Router>
        <ScreensRouter />
      </Router>
    </div>
  );
})`
  max-width: 70vh;
  position: relative;
  margin: auto;
  height: 100vh;
`;
