import React, { useState, useEffect, useContext } from "react"
import { useLocation, useRouteMatch, matchPath } from "react-router-dom"

import { routeFromUrl } from "../routes"
import { AppContext } from "../contexts/AppContext";

export function updatePrevLocation() {
  const { prevLocation, setPrevLocation } = useContext(AppContext)
  const routeMatch = useRouteMatch()
  const location = useLocation()

  // const currentUrl = routeMatch.url
  // const currentUrl = location.pathname
  const currentUrl = window.location.pathname

  useEffect(() => {
    // console.log("curr", currentUrl)

    if (routeMatch.url !== prevLocation) {
      // console.log("prev", prevLocation)
      setPrevLocation(routeMatch.url)
    }
  }, [currentUrl])

  return {
    prevUrl: prevLocation,
    currUrl: currentUrl
  }
}

export function usePrevUrl() {
  const { prevLocation } = useContext(AppContext)
  return prevLocation
}

export function usePrevRoute() {
  return routeFromUrl(usePrevUrl())
}