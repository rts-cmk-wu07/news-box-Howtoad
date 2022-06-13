/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom";
import "./App.css";
import CategoryBar from "./Components/CategoryBar";
import Navbar from "./Components/Navbar";
import NewsArticle from "./Components/NewsArticle";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
