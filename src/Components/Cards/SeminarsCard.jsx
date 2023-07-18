import React from "react";
import { calendar, place, topic } from "../../assets";
import { motion } from "framer-motion";

const SeminarsCard = ({ title, date, plc, vidSrc, sp1, sp2, sp3, sp4 }) => {
  return (
    <div className="seminarCard">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0 }}
        className="card-item gitem"
      >
        <div className="vid-cont">
          <iframe
            src={vidSrc}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="card-item gitem"
      >
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
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="card-item gitem"
      >
        <img src={sp1} alt="" />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="card-item gitem"
      >
        <img src={sp2} alt="" />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="card-item gitem"
      >
        <img src={sp3} alt="" />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="card-item gitem"
      >
        <img src={sp4} alt="" />
      </motion.div>
    </div>
  );
};

export default SeminarsCard;
