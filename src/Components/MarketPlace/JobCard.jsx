import React from "react";
import { client, course3 } from "../../assets";

const JobCard = () => {
  return (
    <div id="jobCard" className="jc1">
      <img src={course3} alt="" className="jobBanner" />
      <div className="clientDetails">
        <div className="userInfo">
          <img src={client} alt="" className="user" />
          <p className="primary-text">UserName</p>
        </div>
        <small className="postDate">12/09/2023</small>
      </div>
      <div className="jobDetails">
        <p className="secondary-text desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim
          maxime cum! Fuga, maxime. Alias?
        </p>

        <h3 className="price primary-text">
          Price starts from - <span className="textGradient">৳ 1000</span>
        </h3>
      </div>
    </div>
  );
};

export default JobCard;
