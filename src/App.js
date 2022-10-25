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
import WizardButton from "./components/WizardButton";
import DisplayError from "./components/DisplayError";

import {
  useLabels,
  useGuides,
  useReservation,
  deleteToken,
} from "./hooks/useAppData";

import ScreensRouter from "./ScreensRouter";

// Create a client
const queryClient = new QueryClient();

const defaultGuide = { id: null, name: "", picture: "" };

export default function App() {
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

  const reservation = useReservation();

  const { error } = useContext(AppContext);

  if (error && location.pathname !== "/scanner") {
    // const isMobileApp = window.Capacitor !== undefined;
    const isMobileApp = 1;

    switch (error.code) {
      case "token is required":
        if (isMobileApp) {
          return (
            <div className={className}>
              <ScanQr />
            </div>
          );
        } else {
          // web app
          return (
            <div className={className}>
              <TokenRequired />
            </div>
          );
        }
        break;

      case "404":
        deleteToken();
        error.description = "Invalid or expired token";
        break;
    }

    return (
      <div className={className}>
        <WizardWrapper logoTop="36%">
          <DisplayError {...error} />
        </WizardWrapper>
      </div>
    );
  }

  // CHECK TOKEN EXPIRED
  if (reservation) {
    const departure = new Date(reservation.dates.departure.full),
      now = new Date();

    // add one  day of tolerance
    departure.setDate(departure.getDate() + 1);

    if (now > departure) {
      // reservation expired, delete token and redirect
      deleteToken();
      location = "/";
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

function TokenRequired() {
  const btnStyle = {
    position: "absolute",
    bottom: "30%",
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  };

  const errorCode = "Access denied";

  return (
    <WizardWrapper logoTop="36%" logoPayoff>
      <DisplayError code={errorCode} />
    </WizardWrapper>
  );
}
