import React from "react";
import { course6 } from "../../assets";

const WinJob = () => {
  const jobTitle =
    "Landing Page template create with easy drag and drop functionality.";
  return (
    <div id="winJob" className="jc1">
      <img src={course6} alt="" className="jobBanner" />
      <div className="jobDetails">
        <small className="category secondary-text">Web Development</small>
        <h3 className="primary-text">{jobTitle.substring(0, 45)}...</h3>
        <h2>৳ 1000</h2>
      </div>
    </div>
  );
};

export default WinJob;
