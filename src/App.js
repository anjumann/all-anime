import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import QuoteAnime from "./view/Qoute/QuoteAnime";
import Home from "./view/home/Home";
import Details from "./view/Detail/Details";

function App() {
  return (
    <>
      <div className="scrollbar scrollbar-thumb-red-800 scrollbar-track-red-300" >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Quote" element={<QuoteAnime />} />
          <Route path="details/:id" element={ <Details/>  } />
        </Routes>
      </div>
    </>

  );
}

export default App;
