import "./styles.css"
import React, { useState, createContext } from "react"
import { BrowserRouter as Router, useLocation } from "react-router-dom"
import styled from "styled-components"

import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import useLocalStorage from "react-use-localstorage"

import AddToHomeScreen from "@ideasio/add-to-homescreen-react"

import { ConfigContext } from "./contexts/ConfigContext"
import { AppContext } from "./contexts/AppContext"

import WizardWrapper from "./components/WizardWrapper"
import WizardBottom from "./components/WizardBottom"
import DisplayError from "./components/DisplayError"

import { useLabels, useGuides, useReservation } from "./hooks/useAppData"

import ScreensRouter from "./ScreensRouter"

// Create a client
const queryClient = new QueryClient()

const defaultGuide = { "id": null, "name": "", "picture": "" }

export default function App() {
  // id lingua
  const [langId, setLangId] = useLocalStorage("langId", null)

  // dati della guida scelta
  const [guideId, setGuideId] = useLocalStorage("guideId", null)

  // token temporaneo per ID appartamento = 61
  const tempToken = "f4b226aa068039e8d045a8100d03b4989d63ffd1"

  // token prenotazione
  const [reservationToken, setReservationToken] = useLocalStorage("reservationToken", tempToken)

  const config = {
    langId,
    setLangId,
    guideId,
    setGuideId,
    reservationToken
  }

  // ricorda la route precedente per gestire le animazioni
  const [prevLocation, setPrevLocation] = useState(null)

  // variabile per getire redirect in differita (menu ScreenFooter)
  const [lazyRedirect, setLazyRedirect] = useState(null)

  const appClient = {
    prevLocation,
    setPrevLocation,
    lazyRedirect,
    setLazyRedirect,
  }

  return (
    <AppContext.Provider value={appClient}>
      <ConfigContext.Provider value={config}>
        <QueryClientProvider client={queryClient}>
          <StyledApp className="app" />
          {/*<ReactQueryDevtools initialIsOpen />*/}
        </QueryClientProvider>
      </ConfigContext.Provider>
    </AppContext.Provider>
  )
}

const StyledApp = styled(({ className }) => {
  const required = [
    useLabels(),
    useGuides(),
    useReservation()
  ]

  const hasError = required.find(data => {
    return (data && data.error)
  })

  if (hasError) {
    return (
      <div className={className}>
        <WizardWrapper logoTop="10%">
          <WizardBottom>
            <DisplayError {...hasError.error} />
          </WizardBottom>
        </WizardWrapper>
      </div>
    )
  }

  return (
    <div className={className}>
      <AddToHomeScreen />

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
  min-height: 640px;
  overflow: hidden;
`