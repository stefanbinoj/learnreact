import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './input.css'

function App() {

  return (
    <>
      <Router>
        <Navbar title="Stefan" />
        <div className="bg-blue-500">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
