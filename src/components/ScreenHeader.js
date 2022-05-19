import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { ConfigContext } from "../contexts/ConfigContext";

import { useLabel } from "../hooks/useAppData";

export default function ({ text, backToTarget }) {
  backToTarget = backToTarget || "/menu";

  const label = useLabel();

  return (
    <ScreenHeader>
      <span className="title">
        <BackButton backTo={backToTarget} />
        {text}
      </span>

      <div className="contacts">
        <a href={label("contactUrlWhatsapp")} target="_blank">
          <i className="fab fa-whatsapp-square"></i>
        </a>
        <a href={label("contactUrlPhones")}>
          <i className="fas fa-phone-square"></i>
        </a>
      </div>
    </ScreenHeader>
  );
}

const ScreenHeader = styled.div`
  position: relative;
  padding: 1em 0;
  font-size: 27px;
  text-align: center;
  background: #fff;

  & .title {
    font-size: 27px;
  }

  & .back {
    cursor: pointer;
    position: absolute;
    left: 15px;
    top: 0;
    width: 38px;
    height: 100%;
    padding-top: 2px;
    display: flex;
    align-items: center;
  }

  .contacts {
    // text-align: right;
    padding-top: 0.2em;
    font-size: 1.5em;

    a {
      color: #265a32;
    }
    a + a {
      margin-left: 0.5em;
    }
  }
`;

const BackButton = styled(({ backTo }) => {
  const history = useHistory();

  return (
    <span className="back" onClick={handleClick}>
      <i className="fas fa-chevron-left" />
    </span>
  );

  function handleClick() {
    // history.push(backTo)
    history.goBack();
  }
})``;
