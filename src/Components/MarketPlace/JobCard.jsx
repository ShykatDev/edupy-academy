import React from "react";
import { checked, client, course3 } from "../../assets";
import { useNavigate } from "react-router-dom";

const JobCard = () => {
  const navigate = useNavigate();
  return (
    <div id="jobCard" className="jc1" onClick={() => navigate("/single-job")}>
      <img src={course3} alt="" className="jobBanner" />
      <div className="clientDetails">
        <div className="userInfo">
          <img src={client} alt="" className="user" />
          <p className="primary-text">UserName</p>
        </div>
        <small className="postDate">Posted - 12/09/2023</small>
      </div>
      <div className="jobDetails">
        <p className="secondary-text desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim
          maxime cum! Fuga, maxime. Alias?
        </p>

        <div className="tags">
          <div className="tag">
            <small className="secondary-text">Website</small>
          </div>
          <div className="tag">
            <small className="secondary-text">Graphic</small>
          </div>
          <div className="tag">
            <small className="secondary-text">Content Writing</small>
          </div>
        </div>

        <div className="client-job">
          <div className="checkJob">
            <img src={checked} alt="" />
            <small className="secondary-text">3 completed job</small>
          </div>
          <div className="checkPrice">
            <img src={checked} alt="" />
            <small className="secondary-text">Payment Verified</small>
          </div>
        </div>

        <h3 className="price primary-text">
          Price starts from - <span className="textGradient">৳ 1000</span>
        </h3>
      </div>
    </div>
  );
};

export default JobCard;
