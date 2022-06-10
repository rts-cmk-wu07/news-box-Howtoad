import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // console.log(useLocation().pathname));
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="archive" element={<Archive />} />
        <Route path="settings" element={<Settings />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
