import "./styles.css";
import { useState, React } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ConfigContext } from "./contexts/ConfigContext";

import Screens from "./screens";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  const [language, setLanguage] = useState("");
  const [guide, setGuide] = useState("");

  const config = { language, setLanguage, guide, setGuide };

  return (
    <ConfigContext.Provider value={config}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
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
        </div>
      </QueryClientProvider>
    </ConfigContext.Provider>
  );
}
