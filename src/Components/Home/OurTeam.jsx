import React, { useRef } from "react";
import { motion } from "framer-motion";
import { team5 } from "../../assets";

const OurTeam = () => {
  const teamDiv = useRef();

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
      <h1 className="primary-text">
        আমাদের <span className="textGradient">দক্ষ টিম</span>, তোমাদের{" "}
        <span className="textGradient">দক্ষ মেন্টর</span>
      </h1>
      <p className="secondary-text">
        আমাদের টিচার প্যানেলে যারা আছেন তারা বাংলাদেশের BUET এবং ইন্ডিয়ার LPU
        থেকে গ্র্যাজুয়েটেড
      </p>

      <div className="team" ref={teamDiv}>
        <div className={`team-member mem-active`} onClick={handleActive}>
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details"
          >
            <h2 className="primary-text">MD. Mehedi Hasan</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">CEO & Founder</p>
          </motion.div>
        </div>
        <div className={`team-member`} onClick={handleActive}>
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details"
          >
            <h2 className="primary-text">Abrar Shahriar Tanha</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">CEO & Founder</p>
          </motion.div>
        </div>
        <div className={`team-member`} onClick={handleActive}>
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details"
          >
            <h2 className="primary-text">Sheikh Abdul Munim</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">CEO & Founder</p>
          </motion.div>
        </div>
        <div className={`team-member`} onClick={handleActive}>
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details"
          >
            <h2 className="primary-text">MD. Mehedi Hasan</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">CEO & Founder</p>
          </motion.div>
        </div>
        <div className={`team-member`} onClick={handleActive}>
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details"
          >
            <h2 className="primary-text">Shykat Raha</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">Co-founder & Web Developer</p>
          </motion.div>
        </div>
        <div className={`team-member`} onClick={handleActive}>
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details"
          >
            <h2 className="primary-text">Deb Jotty Chakrabortty</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">CEO & Founder</p>
          </motion.div>
        </div>
        <div className={`team-member`} onClick={handleActive}>
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details"
          >
            <h2 className="primary-text">MD. Mehedi Hasan</h2>
            <small className="star">CSE - Lovely Professional University</small>
            <p className="secondary-text">CEO & Founder</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
