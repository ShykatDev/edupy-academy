import React from "react";
import { Link } from "react-router-dom";
import {
  binbag,
  creativity,
  development,
  extra,
  kids,
  self,
  ssc,
} from "../../assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CourseCategory = () => {
  const [t] = useTranslation("global");
  return (
    <div id="courseCategory" className="sec-background">
      <div className="left-col">
        <div className="gradient1"></div>
        <motion.h1
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.7, delay: 0 }}
          className="primary-text"
        >
          {t("category.title1")}
          <span className="textGradient"> {t("category.title2")}</span> {t("category.title3")}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="secondary-text"
        >
          {t("category.desc")}
        </motion.p>
        <motion.img
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 0.7, delay: 0.6 }}
          src={binbag}
          alt=""
        />
      </div>
      <div className="right-col">
        <div className="category-grid">
          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Link to="/" className="category-item gitem">
              <img src={kids} alt="" />
              <h2>{t("category.cat1.title")}</h2>
              <small className="secondary-text">
              {t("category.cat1.desc")}
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Link to="/" className="category-item gitem">
              <img src={creativity} alt="" />
              <h2>{t("category.cat2.title")}</h2>
              <small className="secondary-text">
              {t("category.cat2.desc")}
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <Link to="/" className="category-item gitem">
              <img src={development} alt="" />
              <h2>{t("category.cat3.title")}</h2>
              <small className="secondary-text">
              {t("category.cat3.desc")}
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <Link to="/" className="category-item gitem">
              <img src={self} alt="" />
              <h2>{t("category.cat4.title")}</h2>
              <small className="secondary-text">
              {t("category.cat4.desc")}
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.7 }}
          >
            <Link to="/" className="category-item gitem">
              <img src={ssc} alt="" />
              <h2>{t("category.cat5.title")}</h2>
              <small className="secondary-text">
              {t("category.cat5.desc")}
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.9 }}
          >
            <Link to="/" className="category-item gitem">
              <img src={extra} alt="" />
              <h2>{t("category.cat6.title")}</h2>
              <small className="secondary-text">
              {t("category.cat6.desc")}
              </small>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
