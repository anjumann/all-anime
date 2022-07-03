import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import QuoteAnime from "./view/Details/QuoteAnime";
import Home from "./view/home/Home";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Quote" element={ <QuoteAnime/> } />
      </Routes>

    </>

  );
}

export default App;
