import React, { useState } from "react"

import AnimatedFrame from "../components/AnimatedFrame"
import ScreenHeader from "../components/ScreenHeader"
import ScreenFooter from "../components/ScreenFooter"
import ArticlesList from "../components/ArticlesList"

import { useLabels, useServices } from "../hooks/useAppData"
import useAnimationMode from "../hooks/useAnimationMode"

export default function ServicesList() {
  const label = useLabels()

  const services = useServices()

  const headerText = label("serviceTitle")

  const animationMode = useAnimationMode([
    { fromKey: "*", mode: "overlayFromRightAndBack" }
  ])

  return (
    <AnimatedFrame scrollable mode={animationMode}>
      <ScreenHeader text={headerText} />

      <ArticlesList data={services} />

      <ScreenFooter />
    </AnimatedFrame>
  )
}