import React from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/UI/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
