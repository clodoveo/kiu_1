import React from "react";
import styled from "styled-components";

import LoadingSpinner from "../components/LoadingSpinner";
import WizardButton from "../components/WizardButton";

export default function Article(props) {
  if (!props) {
    return <LoadingSpinner />;
  }

  const { title, picture, content, links } = props;

  return (
    <StyledArticle>
      {picture && (
        <div className="picture">
          <img src={picture} alt={title} />
        </div>
      )}
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

      {links && <ArticleLinks list={links} />}
    </StyledArticle>
  );
}

const StyledArticle = styled.div`
  .picture {
    text-align: center;
  }
  .content {
    padding: 1em 2em;

    h2 {
    }
  }
  .button {
    text-align: center;
  }

  .links {
    text-align: center;
    margin: 1em auto 3em;
    display: flex;
    flex-direction: column;
    max-width: 20em;

    > div {
      // display: inline-block;

      > a {
        min-width: auto;
        padding: 1em 50px;
        box-sizing: border-box;
        display: block;
      }
    }
    > div + div {
      margin-top: 1em;
    }
  }
`;

function ArticleLinks({ list }) {
  return (
    <div className="links">
      {list.map((link, index) => (
        <WizardButton
          key={index}
          to={link.to}
          text={link.label}
          color="yellow"
          size="small"
          icon={link.icon}
          external={link.external}
        />
      ))}
    </div>
  );
}
