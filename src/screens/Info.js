import React, { useState } from "react";
import styled from "styled-components";

import ScreenHeader from "../components/ScreenHeader";
import ScreenFooter from "../components/ScreenFooter";

import info from "../api/info";

export default function InfoScreen() {
  const [infoData, setInfoData] = useState(false);

  const token = "123123123";

  info
    .fetch(token)
    .then(setInfoData)
    .catch((reason) => alert(reason));

  return (
    <Styled>
      <ScreenHeader text="Informazioni utili" />

      <div className="cards">
        {infoData === false && <h1>loading</h1>}

        {infoData &&
          infoData.map((data, index) => (
            <div key={index} className="card">
              <div className="img">
                <img src={data.imgUrl} alt={data.title} />
              </div>
              <div className="content">
                <div className="title">{data.title}</div>
                <p>{data.text}</p>
              </div>
              {data.links && (
                <div className="links">
                  {data.links.map((linkData, index) => (
                    <a key={index} href={linkData.url}>
                      <i className={linkData.iconClass} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>

      <ScreenFooter />
    </Styled>
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
          color: #265a32;
          font-weight: bold;
        }

        p {
          margin: 6px 0;
        }
      }

      .links {
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
