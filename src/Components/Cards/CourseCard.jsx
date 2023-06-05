import React, { useState } from "react";
import { aboutus, cart, checked, play } from "../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CoursePopup from "../Home/CoursePopup";

const CourseCard = ({
  banner,
  title,
  mentor,
  price,
  desc,
  nos,
  bestSeller,
  setPopup,
}) => {
  return (
    <div>
      <div id="courseCard">
        <div className="courseBanner">
          {bestSeller && (
            <div className="bestSeller">
              <p>Best Seller</p>
            </div>
          )}
          <img src={banner} alt="" />
          <div className="popupbtn" onClick={() => setPopup(true)}>
            <img src={play} alt="" />
          </div>
        </div>
        <div className="course-details">
          <h2 className="primary-text">{title}</h2>
          <small>
            A course by <span>{mentor}</span>
          </small>
          <p className="secondary-text desc">{desc}</p>
          <div className="enrollNum">
            <img src={aboutus} alt="" />
            <p>{nos} students enrolled</p>
          </div>
          <div className="btn-group">
            <div className="left-btn">
              <img src={checked} alt="" />
              <p className="primary-text">{price} tk</p>
            </div>
            <div className="right-btn">
              <Link to="/">
                <img src={cart} alt="" />
                <p>এনরল করো</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
