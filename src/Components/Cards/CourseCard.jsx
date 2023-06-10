import React, { useState } from "react";
import { aboutus, checked, play } from "../../assets";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

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
      <div id="courseCard" className="p-course">
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
              <p className="primary-text">{price} tk</p>
            </div>
            <div className="right-btn hbtn">
              <Link to="/">
                <BsCart2 className="cart" />
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
