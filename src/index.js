import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archive from "./Components/Archive";
import NewsBox from "./Components/NewsBox";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // console.log(useLocation().pathname));
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="archive" element={<Archive />} />
          <Route path="newsbox" element={<NewsBox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
