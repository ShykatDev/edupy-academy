import React from "react";
import Header from "../Components/Home/Header";
import Journey from "../Components/Home/Journey";
// import PopularCourses from "../Components/Home/PopularCourses";
import CourseCategory from "../Components/Home/CourseCategory";
import Support from "../Components/Home/Support";
import Seminar from "../Components/Home/Seminar";
import Faq from "../Components/Home/Faq";
import SocialSupport from "../Components/Home/SocialSupport";
import OurSeminars from "../Components/Home/OurSeminars";
import OurTeam from "../Components/Home/OurTeam";

const Homepage = ({ darkTheme }) => {
  return (
    <div id="homepage" className={!darkTheme ? "dark" : "light"}>
      <Header />
      <Journey />
      {/* <PopularCourses /> */}
      <OurSeminars />
      <CourseCategory />
      <Support />
      <Seminar />
      <Faq />
      <SocialSupport />
      <OurTeam />
    </div>
  );
};

export default Homepage;
