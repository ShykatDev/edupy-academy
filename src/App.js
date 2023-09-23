import React, { useState } from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/UI/Footer";

import Construction from "./Components/UI/Construction";
import ScrollTop from "./Components/UI/ScrollTop";
import Marketplace from "./Components/MarketPlace/Marketplace";
import SingleAnimatedCategory from "./Components/MarketPlace/SingleAnimatedCategory";
import PostJob from "./Components/MarketPlace/PostJob";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className="app">
      <Router>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Homepage darkTheme={darkTheme} />} />
          {/* MarketPlace */}

          <Route
            path="/marketplace"
            element={<Marketplace darkTheme={darkTheme} />}
          />
          <Route
            path="/post-job"
            element={<PostJob darkTheme={darkTheme} />}
          />
          <Route
            path="//marketplace/animated"
            element={<SingleAnimatedCategory darkTheme={darkTheme} />}
          />

          <Route path="*" element={<Construction darkTheme={darkTheme} />} />
        </Routes>
        <Footer darkTheme={darkTheme} />
      </Router>
    </div>
  );
}

export default App;
