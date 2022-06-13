import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archive from "./Components/Archive";
import NewsBox from "./Components/NewsBox";
import Settings from "./Components/Settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // console.log(useLocation().pathname));
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="archive" element={<Archive />} />
          <Route path="newsbox" element={<NewsBox />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
