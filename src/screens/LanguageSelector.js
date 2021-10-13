import { React, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import WizardWrapper from "../components/WizardWrapper";
import { ConfigContext } from "../contexts/ConfigContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(ConfigContext);
  const history = useHistory();

  function clickHandler(par) {
    setLanguage(par);
    history.push("/guide");
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
          <h1>{language}</h1>

          <button onClick={() => clickHandler("it")}> IT </button>
          <button onClick={() => clickHandler("en")}> EN </button>
          <Link to="/"> SPLASH </Link>
        </div>
      </>
    </WizardWrapper>
  );
}
