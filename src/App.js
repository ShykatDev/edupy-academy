import React, { useState } from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/UI/Footer";
import FreeCourseCard from "./Components/Cards/FreeCourseCard";
import Construction from "./Components/UI/Construction";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className="app">
      <Router>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />

        <Routes>
          <Route path="/" element={<Homepage darkTheme={darkTheme} />} />
          <Route path="*" element={<Construction darkTheme={darkTheme}/>} />          

        </Routes>
        <Footer darkTheme={darkTheme} />
      </Router>
    </div>
  );
}

export default App;
