import React from "react";
import { discord, phone, socialSupport } from "../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SocialSupport = () => {
  const [t] = useTranslation("global");
  return (
    <div id="socialSupport" className="sec-background">
      <div className="left-col">
        <motion.h1
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.7 }}
          className="primary-text"
        >
          {t("discordSupport.title1")}
          <span className="textGradient"> {t("discordSupport.title2")}</span> {t("discordSupport.title3")}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="secondary-text"
        >{t("discordSupport.desc")}
        </motion.p>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="btn-group"
        >
          <Link to="/batch" className="linkBtn">
            <button className="sbtn">
              <img src={discord} alt="" className="ico" />
              <p className="secondary-text">{t("discordSupport.btn1")}</p>
            </button>
          </Link>
          <Link to="/batch" className="linkBtn">
            <button className="sbtn">
              <img src={phone} alt="" className="ico" />
              <p className="secondary-text">{t("discordSupport.btn2")}</p>
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="right-col">
        <div className="gradient1"></div>
        <div className="gradient2"></div>
        <motion.img
          whileInView={{ opacity: [0, 1], x: [20, 0] }}
          transition={{ duration: 0.7, delay: 0.7 }}
          src={socialSupport}
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialSupport;
