import "./styles.css";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigContext } from "./contexts/ConfigContext";

import useLabels from "./hooks/useLabels";

import ScreensRouter from "./ScreensRouter";

// Create a client
const queryClient = new QueryClient();

export default function () {
  const [language, setLanguage] = useState(1);
  const [guide, setGuide] = useState(null);
  const [labels, setLabels] = useState(null);

  const config = { language, setLanguage, guide, setGuide, labels, setLabels };

  return (
    <ConfigContext.Provider value={config}>
      <QueryClientProvider client={queryClient}>
        <App className="app" />
      </QueryClientProvider>
    </ConfigContext.Provider>
  );
}

const App = styled(({ className }) => {
  return (
    <div className={className}>
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
