import React, { useEffect } from "react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

export default function Scanner() {
  const startScan = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      return result.content; // log the raw scanned content
    }
  };

  useEffect(
    () => startScan().then((res) => (window.location.href = `/?token=${res}`)),
    []
  );
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "50vw",
        height: "50vw",
        transform: "translate(-50%, -50%)",
        border: "4px dotted #fff",
        borderRadius: "50px",
      }}
    ></div>
  );
}
