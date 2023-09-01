import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
  const teamDiv = useRef();
  const [t, i18n] = useTranslation("global");

  const handleActive = (e) => {
    const childrens = Array.from(
      teamDiv.current.querySelectorAll(".team-member")
    );

    let class_name = e.target.className;

    if (!class_name.includes("mem-active")) {
      childrens.map((c) => {
        if (c.className.includes("mem-active")) {
          c.className = "team-member";
        }
        return null;
      });

      e.target.className = "team-member mem-active";
    }
  };

  return (
    <div id="ourTeam" className="sec-background">
      <motion.h1
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.7, delay: 0 }}
        className="primary-text"
      >
        {t("team.title1")} <span className="textGradient">{t("team.title2")}</span>, {t("team.title3")}{" "}
        <span className="textGradient">{t("team.title4")}</span>
      </motion.h1>
      <motion.p
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.7, delay: 0 }}
        className="secondary-text"
      >
        {t("team.desc")}
      </motion.p>

      <div className="team" ref={teamDiv}>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.7, delay: 0 }}
          className={`team-member mem-active`}
          onClick={handleActive}
        >
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details team-bg"
          >
            <h2 className="primary-text">MD. Mehedi Hasan</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">CEO & Founder</p>
          </motion.div>
        </motion.div>

        {/* <motion.div
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`team-member`}
          onClick={handleActive}
        >
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details team-bg"
          >
            <h2 className="primary-text">MD. Kamrul Hasan</h2>
            <small className="star">CSE - BUET</small>
            <p className="secondary-text">Co-Founder & Instructor</p>
          </motion.div>
        </motion.div> */}

        <motion.div
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className={`team-member`}
          onClick={handleActive}
        >
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details team-bg"
          >
            <h2 className="primary-text">Oyasiul Islam</h2>
            <small className="star">CSE - BUET</small>
            <p className="secondary-text">Co-Founder & Instructor</p>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className={`team-member`}
          onClick={handleActive}
        >
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details team-bg"
          >
            <h2 className="primary-text">Shykat Raha</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">Co-Founder and Web Developer</p>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className={`team-member`}
          onClick={handleActive}
        >
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details team-bg"
          >
            <h2 className="primary-text">Sheikh Abdul Munim</h2>
            <small className="star">
              Mechatronics - Lovely Professional University
            </small>
            <p className="secondary-text">Co-founder & Instructor</p>
          </motion.div>
        </motion.div>

        {/* <motion.div
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className={`team-member`}
          onClick={handleActive}
        >
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details team-bg"
          >
            <h2 className="primary-text">Md. Sabbir Hossain</h2>
            <small className="star">
              BBA - Rabindra University, Bangladesh
            </small>
            <p className="secondary-text">Chief Marketing Officer</p>
          </motion.div>
        </motion.div> */}

        <motion.div
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className={`team-member`}
          onClick={handleActive}
        >
          <motion.div 
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details team-bg"
          >
            <h2 className="primary-text">Abrar Shahriar Tanha</h2>
            <small className="star">EEE - Islamic University</small>
            <p className="secondary-text">Designer</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
