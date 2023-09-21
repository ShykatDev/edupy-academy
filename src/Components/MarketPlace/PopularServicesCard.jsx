import React from "react";
import { useNavigate } from "react-router-dom";

const PopularServicesCard = ({ banner, title, subTitle, link }) => {
  const navigation = useNavigate();
  return (
    <div id="popularCard" onClick={() => navigation(link || "/")}>
      <img src={banner} alt="" />
      <div className="details team-bg">
        <small className="star">{subTitle}</small>
        <h2 className="primary-text">{title}</h2>
      </div>
    </div>
  );
};

export default PopularServicesCard;
