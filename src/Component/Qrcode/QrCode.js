import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [qr, setQr] = useState("");

  const handleGenerate = () => {
    setQr(input);
    setInput("")
};
console.log(qr)
  return (
    <div>
      <h1>QrCode Generatot</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Generate Qr"
        value={input}
      />
      <button onClick={() => handleGenerate()}>Generate QR</button>
      <div>
        <QRCode id="qr-code" value={qr} />
      </div>
    </div>
  );
};

export default QrCode;
