import React from "react";

export default function WizardWrapper(props) {
  const { logoTop } = props;
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
      </div>
      <div>{React.cloneElement(props.children, { ...props })}</div>
    </div>
  );
}
