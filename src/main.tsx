import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DrumMachineProvider } from "./utils/context/DrumMachineContext";
import "./styles/GlobalStyles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DrumMachineProvider>
      <App />
    </DrumMachineProvider>
  </React.StrictMode>
);
