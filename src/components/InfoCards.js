import React, { useState } from "react";
import styled from "styled-components";

import LoadingSpinner from "../components/LoadingSpinner";

export default function InfoCards({ items, coverComponent, noGuts }) {
  const CoverComponent = coverComponent ? coverComponent : ImageCover;

  if (!items) {
    return <LoadingSpinner />;
  }

  const cardsClass = "cards " + (noGuts ? "no-guts" : "guts");

  return (
    <StyledInfoCards className={cardsClass}>
      {items.map((item, index) => (
        <div key={index} className="card">
          <CoverComponent {...item} />

          <div className="content">
            <div className="title">{item.title}</div>

            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />

            {item.links && (
              <div className="links">
                {item.links.map(({ url, iconClass }) => (
                  <a key={url} href={url}>
                    <i className={iconClass} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </StyledInfoCards>
  );
}

const StyledInfoCards = styled.div`
  border-top: 1px solid #eee;

  &.guts {
    padding: 1em;

    .card {
      padding: 1em;
      box-shadow: 0px 0px 42px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
  }

  .card + .card {
    margin-top: 1.8em;
  }

  .card {
    .img {
      text-align: center;

      img {
        max-width: 100%;
      }
    }

    .content {
      padding: 10px;

      .title {
        font-size: 23px;
        line-height: 36px;
        color: #265a32;
        font-weight: bold;
      }

      p {
        margin: 6px 0;
      }

      .links {
        margin-top: 1.2em;
        text-align: right;
        a {
          font-size: 41px;
          color: #265a32;
          margin: 10px;
        }
      }
    }
  }
`;

function ImageCover({ imgUrl, title }) {
  if (!imgUrl) {
    return null;
  }

  return (
    <div className="img">
      <img src={imgUrl} alt={title} />
    </div>
  );
}
