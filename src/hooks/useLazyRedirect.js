import React, { useContext, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"

export function useLazyRedirect(Context) {
  const { lazyRedirect, setLazyRedirect } = useContext(Context)

  const location = useLocation(),
    history = useHistory()

  useEffect(() => {
    if (lazyRedirect) {
      if (location.pathname === lazyRedirect.to) {
        // reset se sono arrivato a destinazione
        setLazyRedirect(null)
      } else if (location.pathname !== lazyRedirect.from) {
        // effettua redirect se location diversa da "from" e da "to"
        history.push(lazyRedirect.to)
      }
    }
  })
}