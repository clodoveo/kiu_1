import styled from "styled-components";

import WizardButton from "./WizardButton";
import { Link, Redirect } from "react-router-dom";

export default function DisplayError({ code, description }) {
  // const startScan = async () => {
  //   // Check camera permission
  //   // This is just a simple example, check out the better checks below
  //   await BarcodeScanner.checkPermission({ force: true });

  //   // make background of WebView transparent
  //   // note: if you are using ionic this might not be enough, check below
  //   BarcodeScanner.hideBackground();

  //   const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

  //   // if the result has content
  //   if (result.hasContent) {
  //     console.log(result.content); // log the raw scanned content
  //   }
  // };
  return (
    <StyledDisplayError>
      <Link to="/scanner">SCAN QR</Link>
    </StyledDisplayError>
  );
}

const StyledDisplayError = styled.div`
  font-size: 1rem;
  background: #fffb;
  position: absolute;
  bottom: 20%;
  left: 2em;
  right: 2em;
  padding: 3em;
  text-align: center;
  border-radius: 1em;
`;
