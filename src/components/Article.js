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
    margin-top: 1em;

    > div + div {
      margin-top: 1em;
    }
  }
`;

function ArticleLinks({ list }) {
  return (
    <div className="links">
      {list.map((link) => (
        <WizardButton
          to={link.to}
          text={link.label}
          color="yellow"
          icon={link.icon}
          external={link.external}
        />
      ))}
    </div>
  );
}
