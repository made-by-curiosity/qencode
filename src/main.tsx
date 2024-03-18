import React from "react";
import ReactDOM from "react-dom/client";
import RootPage from "./pages/RootPage/RootPage.tsx";
import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>,
);
