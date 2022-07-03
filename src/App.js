import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import SearchAnime from "./view/Details/SearchAnime";
import Home from "./view/home/Home";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={ <SearchAnime/> } />
      </Routes>

    </>

  );
}

export default App;
