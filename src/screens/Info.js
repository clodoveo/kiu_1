import React from "react";
import styled from "styled-components";

import ScreenHeader from "../components/ScreenHeader";

export default styled((props) => <Info {...props} />)`
  text-align: left;

  & .cards {
    border-top: 1px solid #eee;
    padding: 1em;

    & .card {
      padding: 1em;
      box-shadow: 0px 0px 42px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      & img {
        max-width: 100%;
      }

      & .content {
        padding: 10px;

        & .title {
          font-size: 23px;
          color: #265a32;
          font-weight: bold;
        }
        & p {
          margin: 6px 0;
        }
      }
    }
  }
`;

const Info = ({ className }) => {
  return (
    <div className={className}>
      <ScreenHeader text="Informazioni utili" />
      ciao
      <div className="cards">
        {infoData.map((data) => (
          <div className="card">
            <div className="img">
              <img src={data.imgUrl} alt={data.title} />
            </div>
            <div className="content">
              <div className="title">{data.title}</div>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const infoData = [
  {
    title: "Giomi immobiliare",
    imgUrl: "https://giomiapp.terotero.it/img/original/appdemo/info-1.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in.",
    links: [
      {
        icon: "phone",
        url: "tel:+39347666666"
      },
      {
        icon: "envelope",
        url: "mailto:info@immobiliaregiomi.com"
      }
    ]
  }
];
