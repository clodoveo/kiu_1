import "./styles.css";
import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import styled from "styled-components";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import useLocalStorage from "react-use-localstorage";

import AddToHomeScreen from "@ideasio/add-to-homescreen-react";

import { ConfigContext } from "./contexts/ConfigContext";
import { AppContext } from "./contexts/AppContext";

import WizardWrapper from "./components/WizardWrapper";
import WizardBottom from "./components/WizardBottom";
import DisplayError from "./components/DisplayError";
import WizardButton from "./components/WizardButton";
import { useLabels, useGuides, useReservation } from "./hooks/useAppData";

import ScreensRouter from "./ScreensRouter";

import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

// Create a client
const queryClient = new QueryClient();

const defaultGuide = { id: null, name: "", picture: "" };

export default function App() {
  console.log(Capacitor);
  // id lingua
  const [langId, setLangId] = useLocalStorage("langId", null);

  // dati della guida scelta
  const [guideId, setGuideId] = useLocalStorage("guideId", null);

  // token prenotazione
  const [reservationToken, setReservationToken] =
    useLocalStorage("reservationToken");

  useState(() => {
    // token temporaneo per ID appartamento = 61
    // const tempToken = "f4b226aa068039e8d045a8100d03b4989d63ffd1"

    //const receivedToken = "test";
    const receivedToken = getQueryValue("token");

    if (receivedToken) {
      setReservationToken(receivedToken);
    }
  });

  const config = {
    langId,
    setLangId,
    guideId,
    setGuideId,
    reservationToken,
  };

  // ricorda la route precedente per gestire le animazioni

  const [prevLocation, setPrevLocation] = useState(null);

  // variabile per getire redirect in differita (menu ScreenFooter)
  const [lazyRedirect, setLazyRedirect] = useState(null);

  const [error, setError] = useState(null);

  const appClient = {
    prevLocation,
    setPrevLocation,
    lazyRedirect,
    setLazyRedirect,
    error,
    setError,
  };

  return (
    <AppContext.Provider value={appClient}>
      <ConfigContext.Provider value={config}>
        <QueryClientProvider client={queryClient}>
          <StyledApp className="app" />
          {/*<ReactQueryDevtools initialIsOpen />*/}
        </QueryClientProvider>
      </ConfigContext.Provider>
    </AppContext.Provider>
  );

  function getQueryValue(searchKey) {
    const queryString = window.location.search.substr(1);

    if (queryString.length === 0) {
      return null;
    }

    for (const keyValue of queryString.split("&")) {
      const [key, value] = keyValue.split("=");
      if (key === searchKey) {
        return value;
      }
    }

    return null;
  }
}

const StyledApp = styled(({ className }) => {
  // get some data
  useLabels();
  useGuides();
  useReservation();

  const { error } = useContext(AppContext);

  if (error) {
    // token error
    if (error.code === "token is required") {
      if (location.pathname !== "/scanner") {
        return (
          <div className={className}>
            <ScanQr />
          </div>
        );
      }
    } else {
      // any error
      return (
        <div className={className}>
          <WizardWrapper logoTop="36%">
            <DisplayError {...error} />
          </WizardWrapper>
        </div>
      );
    }
  }

  return (
    <div className={className}>
      <AddToHomeScreen />
      <Router>
        <ScreensRouter />
      </Router>
    </div>
  );
})`
  position: relative;
  margin: auto;
  height: 100vh;
  min-height: 640px;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    max-width: 70vh;
  }
`;

function ScanQr() {
  const btnStyle = {
    position: "absolute",
    bottom: "30%",
    width: "100%",
    textAlign: "center",
  };

  return (
    <WizardWrapper logoTop="36%" logoPayoff>
      <div style={btnStyle}>
        <WizardButton
          to="/scanner"
          text="Scan QR"
          color="yellow"
          external="1"
          target="_self"
        />
      </div>
    </WizardWrapper>
  );
}
