import React, { useState } from "react"

import AnimatedFrame from "../components/AnimatedFrame"
import ScreenHeader from "../components/ScreenHeader"
import ScreenFooter from "../components/ScreenFooter"
import ArticlesList from "../components/ArticlesList"

import { useLabels, useServices } from "../hooks/useAppData"

export default function ServicesList() {
  const label = useLabels()

  const services = useServices()

  const headerText = label("serviceTitle")

  return (
    <AnimatedFrame scrollable>
      <ScreenHeader text={headerText} />

      <ArticlesList data={services} />

      <ScreenFooter />
    </AnimatedFrame>
  )
}
