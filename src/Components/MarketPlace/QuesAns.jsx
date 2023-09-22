import React, { useState } from "react";
import { downArrow, downArrowWhite } from "../../assets";
import { motion } from "framer-motion";

const QuesAns = ({ active }) => {
  const [faqActive, setFaqActive] = useState(active);

  return (
    <div className={faqActive ? "faq active" : "faq"}>
      <div className="ques jc1" onClick={() => setFaqActive(!faqActive)}>
        <p className="primary-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque?
        </p>

        <img src={faqActive ? downArrowWhite : downArrow} alt="" />
      </div>
      {faqActive && (
        <motion.p
          whileInView={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ duration: 0.5 }}
          className="secondary-text ans"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          ducimus recusandae quis dolores cum quae repellat suscipit consectetur
          magnam eveniet!
        </motion.p>
      )}
    </div>
  );
};

export default QuesAns;
