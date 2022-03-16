import React from "react";
import styled from "styled-components";

import LoadingSpinner from "../components/LoadingSpinner";
import WizardButton from "../components/WizardButton";

export default function Article(props) {
  if (!props) {
    return <LoadingSpinner />;
  }

  const { title, picture, content } = props;

  let link;

  if (props.link) {
    link = (
      <WizardButton
        to={props.link.to}
        text={props.link.label}
        color="yellow"
        icon={props.link.icon}
        external={props.link.external}
      />
    );
  }

  return (
    <StyledArticle>
      {picture && (
        <div className="picture">
          <img src={picture} alt={title} />
        </div>
      )}
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

      <div className="button">{link}</div>
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
`;
