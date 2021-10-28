import React, { useState } from "react";

import { usePrevRoute } from "../hooks/usePrevLocation"

const defaultMode = "fadeIn"

export default function useAnimationMode(modes) {
  const [animationMode, setAnimationMode] = useState(defaultMode)

  const prevRoute = usePrevRoute() || { key: null }

  useState(() => {
    if (prevRoute.key) {
      // usa mode definito se trovo il corrispondente fromKey con prevRoute
      const routeParams = modes.find(
        params => (
          params.fromKey === prevRoute.key ||
          params.fromKey === "*"
        )
      )

      if (routeParams && animationMode !== routeParams.mode) {
        setAnimationMode(routeParams.mode)
      }
    }
  }, [prevRoute.key])

  // console.log(animationMode)
  return animationMode
}