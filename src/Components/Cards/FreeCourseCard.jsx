import React, { useState } from "react";
import { aboutus, checked } from "../../assets";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const FreeCourseCard = ({ banner, title, mentor, desc, nos, bestSeller }) => {
  const [t] = useTranslation("global");

  return (
    <div>
      <div id="freeCourseCard" className="p-course">
        <div className="courseBanner">
          {bestSeller && (
            <div className="bestSeller">
              <p>Best Seller</p>
            </div>
          )}
          <img src={banner} alt="" />
        </div>
        <div className="course-details">
          <Link to="/">
            <h2 className="primary-text">{title}</h2>
          </Link>
          <small>
            A course by <span className="star">{mentor}</span>
          </small>
          <p className="secondary-text desc">{desc}</p>
          <div className="enrollNum">
            <img src={aboutus} alt="" />
            <p className="star">{nos} students enrolled</p>
          </div>
          <div className="btn-group">
            <div className="left-btn sbtn">
              <img src={checked} alt="" />
              <p className="primary-text">Free</p>
            </div>
            <div className="right-btn hbtn">
              <Link to="/">
                <BsCart2 className="cart" />
                <p>{t("freeCourses.course1.btn")}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
