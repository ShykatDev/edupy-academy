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

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);

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
            <p>হোম</p>
          </NavLink>

          <NavLink to="/about-us" className="link">
            <img src={aboutus} alt="" className="ico" />
            <p>আমাদের বিস্তারিত</p>
          </NavLink>

          <NavLink to="/about-us" className="link d-link">
            <img src={courses} alt="" className="ico" />
            <p>কোর্স সমূহ</p>
            <BsFillCaretDownFill className="downArrow" />
            <ul className="nav-bg">
              <li>
                {" "}
                <Link className="menuLink secondary-text" to="/about-us">
                  <img src={under10} alt="" />
                  <p>অনূর্ধ্ব 10</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>{" "}
              <li>
                <Link className="menuLink secondary-text" to="/storie">
                  <img src={ssc} alt="" />

                  <p>এসএসসি/এইচএসসি</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>
              <li>
                <Link
                  className="menuLink secondary-text"
                  to="/impact-initiatives"
                >
                  <img src={eng} alt="" />
                  <p>ইঞ্জিনিয়ারিং</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>
              <li>
                <Link
                  className="menuLink secondary-text"
                  to="/research-innovation"
                >
                  <img src={career} alt="" />
                  <p>ক্যারিয়ার</p>
                  <BsFillCaretRightFill className="rightArrow" />
                </Link>
              </li>
              <li>
                <Link
                  className="menuLink secondary-text"
                  to="/research-innovation"
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
            <button>
              <img src={login} alt="" className="ico" />
              <p>লগইন/রেজিস্টার</p>
            </button>
          </Link>
          <Link to="/batch" className="linkBtn">
            <button>
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
