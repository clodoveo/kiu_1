import React, { useContext } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useLabels } from "../hooks/useAppData"

import { AppContext } from "../contexts/AppContext"


export default function ScreenFooter() {
  const links = footerLinks()

  const { setLazyRedirect } = useContext(AppContext)

  return (
    <Styled>
      {links.map(({ linkTo, iconClass, label }, index) => {
        const linkClass = (location.pathname === linkTo) ? "is-active" : ""
        const clickHandler = (location.pathname !== linkTo) ? () => handleClick(linkTo) : null

        return (
          <a key={index}
            className={linkClass}
            onClick={clickHandler}
          >
            <span className="icon">
              <i className={iconClass} />
            </span>
            <span className="label">{label}</span>
          </a>
        )
      })}
    </Styled>
  )

  function handleClick(linkTo) {
    if (location.pathname === linkTo) {
      // siamo gia qui
      return
    }

    setLazyRedirect({
      from: location.pathname,
      to: linkTo
    })

    window.history.back()
  }
}

const Styled = styled.div `
  display: flex;
  padding: 10px 0;
  background: #fff;
  margin-top: 1em;

  a {
    text-align: center;
    width: 25%;
    text-decoration: none;
  }
  a + a {
    border-left: 1px solid #ccc;
  }

  .is-active {
    opacity: 0.5;
    cursor: default;
  }

  .icon {
    color: #265a32;
    display: block;
    font-size: 27px;
  }
  .label {
    font-size: 14px;
    color: #607464;
  }
`

function footerLinks() {
  const label = useLabels()

  return [{
      label: label("btnBottomNavigator"),
      iconClass: "fas fa-location-arrow",
      linkTo: "/map"
    },
    {
      label: label("btnBottomInfo"),
      iconClass: "fas fa-info-circle",
      linkTo: "/info"
    },
    {
      label: label("btnBottomServices"),
      iconClass: "fas fa-umbrella-beach",
      linkTo: "/services"
    },
    {
      label: label("btnBottomChat"),
      iconClass: "fas fa-comment",
      linkTo: "/chat"
    }
  ]
}