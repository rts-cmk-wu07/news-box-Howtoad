/** @jsxImportSource @emotion/react */

import "./App.css";

import Navbar from "./Components/Navbar";

import categoryContext from "./Context/CategoryContext";
import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Archive from "./Components/Archive";
import NewsBox from "./Components/NewsBox";
import Settings from "./Components/Settings";
import { useEffect } from "react";

function App() {
  const listOfCategories = [
    { world: true },
    { health: true },
    { sports: true },
    { business: true },
    { travel: true },
  ];
  const [category, setCategory] = useState(listOfCategories);
  let settingsCategory =
    JSON.parse(localStorage.getItem("settingsCategory")) || false;
  useEffect(() => {
    settingsCategory && setCategory(settingsCategory);
  }, []);
  return (
    <div className="App">
      <categoryContext.Provider value={{ category, setCategory }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsBox />} />
          <Route path="archive" element={<Archive />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </categoryContext.Provider>
    </div>
  );
}

export default App;
