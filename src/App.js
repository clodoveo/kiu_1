import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";

import { ConfigContext } from "./contexts/ConfigContext";
import Screens from "./screens";

// Create a client
const queryClient = new QueryClient();

export default function () {
  const [language, setLanguage] = useState("");
  const [guide, setGuide] = useState("");

  const config = { language, setLanguage, guide, setGuide };

  return (
    <ConfigContext.Provider value={config}>
      <QueryClientProvider client={queryClient}>
        <App className="app">
          <Router>
            <Screens />

            <div
              style={{
                display: "flex",
                //position: "fixed",
                flexDirection: "column"
              }}
            ></div>
          </Router>
        </App>
      </QueryClientProvider>
    </ConfigContext.Provider>
  );
}

const App = styled.div`
  max-width: 480px;
  position: relative;
  margin: auto;
  height: 100vh;
`;
