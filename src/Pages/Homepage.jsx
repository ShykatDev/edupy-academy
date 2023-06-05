import React from "react";
import Header from "../Components/Home/Header";
import Journey from "../Components/Home/Journey";
import PopularCourses from "../Components/Home/PopularCourses";

const Homepage = () => {
  return (
    <div id="homepage" className="dark">
      <Header />
      <Journey />
      <PopularCourses />
    </div>
  );
};

export default Homepage;
