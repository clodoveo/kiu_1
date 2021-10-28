import React, { useContext, useEffect, useState } from "react"
import { withRouter } from "react-router-dom"

import { motion } from "framer-motion";
import styled from "styled-components";

const AnimatedFrame = styled(({
  className,
  children,
  scrollable,
  mode,
  location,
  match,
  isVisible
}) => {
  const animation = getAnimation(mode)

  const classNames = ["animated-frame", className]
  if (scrollable) {
    classNames.push("scrollable")
  }

  return (
    <motion.div
      className={classNames.join(' ')}
      transition={animation.transition}
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
    >
      {children}
    </motion.div>
  )
})
`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;

  &.scrollable {
    overflow-y: scroll;
  }
`

export default withRouter(AnimatedFrame)

function getAnimation(mode) {
  const animation = animations[mode || "fadeIn"]

  const transition = animation.transition || {
    duration: 0.3,
    transition: "ease"
  }

  const initial = normalizeParams(animation.variants.initial)
  const animate = normalizeParams(animation.variants.animate)
  const exit = normalizeParams(animation.variants.exit)

  return { transition, initial, animate, exit }
}

const animations = {
  fadeIn: {
    variants: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0.5 }
    }
  },
  slideFromBottom: {
    variants: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "-50%", opacity: 0 }
    }
  },
  slideFromBottomAndFadeOut: {
    variants: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { opacity: 0 }
    }
  },
  slideFromTop: {
    variants: {
      initial: { y: "-100%" },
      animate: { y: 0 },
      exit: { y: "50%", opacity: 0 }
    }
  },
  slideFromRight: {
    variants: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "-50%", opacity: 0 }
    }
  },
  slideFromLeft: {
    variants: {
      initial: { x: "-100%" },
      animate: { x: 0 },
      exit: { x: "-50%", opacity: 0 }
    }
  },
  slideFromRightAndStay: {
    variants: {
      initial: { x: "100%" },
      animate: { x: 0 }
    }
  },
  overlayFromRightAndBack: {
    variants: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%", opacity: 1 }
    }
  },
  overlayFromBottom: {
    variants: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%", opacity: 1 }
    }
  }
}

function normalizeParams(params) {
  return {
    opacity: 1,
    x: 0,
    y: 0,
    ...params
  }
}