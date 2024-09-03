import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Page2 from "./Screen/Page2";
import Details from "./Components/Details";
// import HeroSec from "./Components/HeroSec";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
       <Route path="/screen" element={<Details />} ></Route>
        <Route path="/screen2" element={<Page2 />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
