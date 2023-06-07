import React from "react";
import Header from "../Components/Home/Header";
import Journey from "../Components/Home/Journey";
import PopularCourses from "../Components/Home/PopularCourses";
import CourseCategory from "../Components/Home/CourseCategory";
import Support from "../Components/Home/Support";

const Homepage = () => {
  return (
    <div id="homepage" className="dark">
      <Header />
      <Journey />
      <PopularCourses />
      <CourseCategory />
      <Support />
    </div>
  );
};

export default Homepage;
