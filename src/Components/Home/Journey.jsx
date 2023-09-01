import React from "react";
import {
  advance,
  basic,
  demo,
  exam,
  job,
  lifeTime,
  path,
  peoples,
  seminar,
  work,
} from "../../assets";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import JourneyCard from "../Cards/JourneyCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Journey = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [t] = useTranslation("global");

  return (
    <div id="journey" className="sec-background">
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="left-slider"
      >
        <Slider {...settings}>
          <div>
            <JourneyCard
              topIco={seminar}
              bottomIco={demo}
              topText={t("journey.card1.title")}
              bottomText={t("journey.card2.title")}
              topSum={t("journey.card1.desc")}
              bottomSum={t("journey.card2.desc")}
              topNum="01"
              bottomNum="02"
            />
          </div>
          <div>
            <JourneyCard
              topIco={basic}
              bottomIco={advance}
              topText={t("journey.card3.title")}
              bottomText={t("journey.card4.title")}
              topSum={t("journey.card3.desc")}
              bottomSum={t("journey.card4.desc")}
              topNum="03"
              bottomNum="04"
            />
          </div>
          <div>
            <JourneyCard
              topIco={exam}
              bottomIco={lifeTime}
              topText={t("journey.card5.title")}
              bottomText={t("journey.card6.title")}
              topSum={t("journey.card5.desc")}
              bottomSum={t("journey.card6.desc")}
              topNum="05"
              bottomNum="06"
            />
          </div>
          <div>
            <JourneyCard
              topIco={job}
              bottomIco={work}
              topText={t("journey.card7.title")}
              bottomText={t("journey.card8.title")}
              topSum={t("journey.card7.desc")}
              bottomSum={t("journey.card8.desc")}
              topNum="07"
              bottomNum="08"
            />
          </div>
        </Slider>
      </motion.div>

      <motion.div
        whileInView={{ x: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="right-details"
      >
        <img src={path} alt="" className="path" />
        <h1 className="primary-text">
        {t("journey.title")} <span className="textGradient">{t("journey.titleSpan")}</span>
        </h1>
        <p className="secondary-text">
        {t("journey.desc")}
        </p>
        <div className="btn-group">
          <Link to="/batch" className="linkBtn">
            <button className="hbtn">
              <img src={peoples} alt="" className="ico" />
              <p>{t("journey.btn1")}</p>
            </button>
          </Link>

          <Link to="/batch" className="linkBtn">
            <button className="sbtn">
              <img src={seminar} alt="" className="ico" />
              <p className="secondary-text">{t("journey.btn2")}</p>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Journey;
