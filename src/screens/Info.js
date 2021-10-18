import React, { useState } from "react";
import styled from "styled-components";

import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";
import LoadingSpinner from "../components/LoadingSpinner";

import info from "../api/info";

export default function InfoScreen() {
  const [infoData, setInfoData] = useState(false);

  if (!infoData) {
    const langId = 1;

    info.fetch(langId).then(setInfoData);
  }

  return (
    <AnimatedFrame scrollable>
      <Styled>
        <ScreenHeader text="Informazioni utili" />

        <div className="cards">
          {infoData === false && <LoadingSpinner />}

          {infoData &&
            infoData.map((data, index) => (
              <div key={index} className="card">
                {data.imgUrl && (
                  <div className="img">
                    <img src={data.imgUrl} alt={data.title} />
                  </div>
                )}

                <div className="content">
                  <div className="title">{data.title}</div>
                  <div dangerouslySetInnerHTML={{ __html: data.text }} />
                </div>
              </div>
            ))}
        </div>

        <ScreenFooter />
      </Styled>
    </AnimatedFrame>
  );
}

const Styled = styled.div`
  .cards {
    border-top: 1px solid #eee;
    padding: 1em;

    .card + .card {
      margin-top: 1.8em;
    }
    .card {
      padding: 1em;
      box-shadow: 0px 0px 42px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      img {
        max-width: 100%;
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
  }
`;
