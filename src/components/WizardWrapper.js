import React from "react";
import { useHistory } from "react-router-dom";

export default function WizardWrapper(props) {
  const { logoTop } = props;
  const history = useHistory();
  return (
    <div
      style={{
        maxWdth: "700px",
        margin: "0 auto",
        backgroundImage:
          "url('https://giomiapp.terotero.it/img/original/app/sfondo.png')",
        height: "100vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: logoTop,
          width: "100%",
          textAlign: "center"
        }}
      >
        <img
          src="https://giomiapp.terotero.it/img/original/app/logoAndPayoff.png"
          style={{ margin: "0 auto" }}
          alt="logo"
        />
        <button onClick={() => history.goBack()}>back</button>
      </div>
      <div>{React.cloneElement(props.children, { ...props })}</div>
    </div>
  );
}
