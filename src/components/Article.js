import React from "react"
import styled from "styled-components"

import LoadingSpinner from "../components/LoadingSpinner"

export default function Article(props) {
  if (!props) {
    return <LoadingSpinner />
  }

  const { title, picture, content } = props

  return (
    <StyledArticle>
      {picture && (
        <div className="picture">
          <img src={picture} alt={title} />
        </div>
      )}
      <div className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </StyledArticle>
  )
}

const StyledArticle = styled.div `
  .picture {
    text-align: center;
  }
  .content {
    padding: 1em 2em;

    h2 {
    }
  }
`