import React from "react";
import Header from "../Components/Home/Header";
import Journey from "../Components/Home/Journey";
import PopularCourses from "../Components/Home/PopularCourses";
import CourseCategory from "../Components/Home/CourseCategory";
import Support from "../Components/Home/Support";
import Seminar from "../Components/Home/Seminar";
import Faq from "../Components/Home/Faq";
import SocialSupport from "../Components/Home/SocialSupport";

const Homepage = ({ darkTheme }) => {
  return (
    <div id="homepage" className={darkTheme ? "dark" : "light"}>
      <Header />
      <Journey />
      <PopularCourses />
      <CourseCategory />
      <Support />
      <Seminar />
      <Faq />
      <SocialSupport />
    </div>
  );
};

export default Homepage;
