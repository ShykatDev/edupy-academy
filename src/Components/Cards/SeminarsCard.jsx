import React from "react";
import { calendar, place, s1p1, s1p2, s1p3, s1p4, topic } from "../../assets";

const SeminarsCard = ({ title, date, plc, vidSrc }) => {
  return (
    <div className="seminarCard">
      <div className="card-item gitem">
        <div className="vid-cont">
          <iframe
            src={vidSrc}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="card-item gitem">
        <div className="date">
          <img src={calendar} alt="" />
          <small className="primary-text">{date}</small>
        </div>
        <div className="title">
          <img src={topic} alt="" />
          <h2 className="textGradient">{title}</h2>
        </div>

        <div className="place">
          <img src={place} alt="" />
          <p className="secondary-text">{plc}</p>
        </div>
      </div>
      <div className="card-item gitem">
        <img src={s1p1} alt="" />
      </div>
      <div className="card-item gitem">
        <img src={s1p2} alt="" />
      </div>
      <div className="card-item gitem">
        <img src={s1p3} alt="" />
      </div>
      <div className="card-item gitem">
        <img src={s1p4} alt="" />
      </div>
    </div>
  );
};

export default SeminarsCard;
