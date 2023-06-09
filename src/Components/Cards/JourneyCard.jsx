import React from "react";
import { demo, seminar } from "../../assets";

const JourneyCard = ({
  topIco,
  bottomIco,
  topText,
  bottomText,
  topSum,
  bottomSum,
  topNum,
  bottomNum,
}) => {
  return (
    <div id="journeyCard">
      <div className="card-item jc1">
        <span className="primary-bg">{topNum}</span>
        <h3 className="">{topText}</h3>
      </div>
      <div className="card-item jc2">
        <img src={topIco} alt="" />
        <small className="primary-text">{topSum}</small>
      </div>
      <div className="card-item jc3"></div>
      <div className="card-item jc1">
        <span className="primary-bg">{bottomNum}</span>
        <h3 className="">{bottomText}</h3>
      </div>
      <div className="card-item jc2">
        <img src={bottomIco} alt="" />
        <small className="primary-text">{bottomSum}</small>
      </div>
      <div className="card-item jc3"></div>
    </div>
  );
};

export default JourneyCard;
