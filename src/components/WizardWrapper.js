import React from "react";
import { useHistory } from "react-router-dom";

export default function WizardWrapper(props) {
  const { children, logoTop } = props;
  const history = useHistory();

  return (
    <div
      style={{
        backgroundImage:
          "url('https://giomiapp.terotero.it/img/original/app/sfondo.png')",
        height: "100%",
        width: "100%",
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
      </div>

      <button onClick={() => history.goBack()}>back</button>

      {/* <div>{React.cloneElement(children, { ...props })}</div> */}
      {children}
    </div>
  );
}
