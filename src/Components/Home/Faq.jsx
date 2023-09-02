import React from "react";
import { all, checked, rocket } from "../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const [t] = useTranslation("global");

  return (
    <div id="FAQ" className="sec-background">
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="left-col"
      >
        <img src={rocket} alt="" className="rocket" />
        <h1 className="primary-text">
        {t("faq.title1")} <span className="textGradient"> {t("faq.title2")}</span> {t("faq.title3")}
        </h1>
        <p className="secondary-text">
        {t("faq.desc")}
        </p>

        <Link to="/batch" className="linkBtn">
          <button className="hbtn">
            <img src={all} alt="" className="ico" />
            <p>{t("faq.btn")}</p>
          </button>
        </Link>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="ans-col"
      >
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> {t("faq.qna1.ques")}
          </h3>
          <p className="secondary-text">
          {t("faq.qna1.ans")}
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img>{t("faq.qna2.ques")}
          </h3>
          <p className="secondary-text">
          {t("faq.qna2.ans")}
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img>{t("faq.qna3.ques")}
          </h3>
          <p className="secondary-text">
          {t("faq.qna3.ans")}
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img>{t("faq.qna4.ques")}
          </h3>
          <p className="secondary-text">
          {t("faq.qna4.ans")}
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img>{t("faq.qna5.ques")}
          </h3>
          <p className="secondary-text">
          {t("faq.qna5.ans")}
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img>{t("faq.qna6.ques")}
          </h3>
          <p className="secondary-text">
          {t("faq.qna6.ans")}
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img>{t("faq.qna7.ques")}
          </h3>
          <p className="secondary-text">
          {t("faq.qna7.ans")}
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img>{t("faq.qna8.ques")}
          </h3>
          <p className="secondary-text">
          {t("faq.qna8.ans")}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
