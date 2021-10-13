import { React, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import WizardWrapper from "../components/WizardWrapper";
import { ConfigContext } from "../contexts/ConfigContext";

export default function GuideSelector() {
  const { guide, setGuide } = useContext(ConfigContext);
  const history = useHistory();

  function clickHandler(par) {
    setGuide(par);
    history.push("/start");
  }

  return (
    <WizardWrapper logoTop="20%">
      <>
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            width: "100%",
            textAlign: "center"
          }}
        >
          <button onClick={() => clickHandler("filippo")}> filippo </button>
          <button onClick={() => clickHandler("manuela")}> manuela </button>
          <Link to="/"> SPLASH </Link>
        </div>
      </>
    </WizardWrapper>
  );
}
