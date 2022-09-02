import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import QuoteAnime from "./view/Qoute/QuoteAnime";
import Home from "./view/home/Home";
import Details from "./view/Details";
import SearchPage from "./view/SearchPage";
import Footer from "./Components/Footer";
import Explore from "./view/Explore";

function App() {
  return (
    <>
     
        <Navbar   />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Quote" element={<QuoteAnime />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="/:explore" element={ <SearchPage/> } />
        </Routes>
        <Footer/>
    
    </>

  );
}

export default App;
