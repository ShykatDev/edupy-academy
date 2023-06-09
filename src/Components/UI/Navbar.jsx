import React, { useState } from "react";
import {
  aboutus,
  courses,
  home,
  logo,
  login,
  peoples,
  under10,
  all,
  career,
  eng,
  ssc,
} from "../../assets";
import {
  BsFillCaretDownFill,
  BsFillCaretRightFill,
  BsMoon,
  BsSun,
} from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ setDarkTheme, darkTheme }) => {
  const themeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div id="navbar" className={darkTheme ? "dark" : "light"}>
      <div className="desktop_menu nav-bg">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <ul className="menu">
          <NavLink to="/" className="link">
            <img src={home} alt="" className="ico" />
            <p className="secondary-text">হোম</p>
          </NavLink>

          <NavLink to="/about-us" className="link">
            <img src={aboutus} alt="" className="ico" />
            <p className="secondary-text">আমাদের বিস্তারিত</p>
          </NavLink>

          <NavLink to="/course" className="link d-link">
            <img src={courses} alt="" className="ico" />
            <p className="secondary-text">কোর্স সমূহ</p>
            <BsFillCaretDownFill className="downArrow" />
            <ul className="nav-bg">
              <li>
                {" "}
                <Link className="menuLink secondary-text" to="/under-10">
                  <img src={under10} alt="" />
                  <p className="secondary-text">অনূর্ধ্ব 10</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>{" "}
              <li>
                <Link className="menuLink secondary-text" to="/ssc-hsc">
                  <img src={ssc} alt="" />

                  <p className="secondary-text">এসএসসি/এইচএসসি</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>
              <li>
                <Link
                  className="menuLink secondary-text"
                  to="/engineering"
                >
                  <img src={eng} alt="" />
                  <p className="secondary-text">ইঞ্জিনিয়ারিং</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>
              <li>
                <Link
                  className="menuLink secondary-text"
                  to="/career"
                >
                  <img src={career} alt="" />
                  <p className="secondary-text">ক্যারিয়ার</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>
              <li>
                <Link
                  className="menuLink secondary-text"
                  to="/all-courses"
                >
                  <img src={all} alt="" />
                  <p className="all-course">সকল কোর্স</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>
            </ul>
          </NavLink>
        </ul>
        <div className="navButtons">
          <Link to="/login" className="linkBtn">
            <button className="sbtn">
              <img src={login} alt="" className="ico" />
              <p className="secondary-text">লগইন/রেজিস্টার</p>
            </button>
          </Link>
          <Link to="/batch" className="linkBtn">
            <button className="hbtn">
              <img src={peoples} alt="" className="ico" />
              <p>ব্যাচ 01 </p>
            </button>
          </Link>

          {darkTheme ? (
            <BsSun className="sun" onClick={themeChange} />
          ) : (
            <BsMoon className="moon" onClick={themeChange} />
          )}
        </div>
      </div>

      <RxHamburgerMenu className="hamburger" />

      <div className="mobile_menu"></div>
    </div>
  );
};

export default Navbar;
