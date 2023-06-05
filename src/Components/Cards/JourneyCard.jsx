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
      <div className="card-item">
        <span>{topNum}</span>
        <h3 className="">{topText}</h3>
      </div>
      <div className="card-item">
        <img src={topIco} alt="" />
        <small className="">{topSum}</small>
      </div>
      <div className="card-item"></div>
      <div className="card-item">
        <span>{bottomNum}</span>
        <h3 className="">{bottomText}</h3>
      </div>
      <div className="card-item">
        <img src={bottomIco} alt="" />
        <small className="">{bottomSum}</small>
      </div>
      <div className="card-item"></div>
    </div>
  );
};

export default JourneyCard;
