import React, { useState } from "react";
import { motion } from "framer-motion";
import { boss, laptop } from "../../assets";

const Support = () => {
  const [switc1, setSwitc1] = useState(true);
  const [switc2, setSwitc2] = useState(false);
  const [switc3, setSwitc3] = useState(false);
  const [switc4, setSwitc4] = useState(false);
  const [switc5, setSwitc5] = useState(false);

  const switchActive1 = () => {
    setSwitc1(true);
    setSwitc2(false);
    setSwitc3(false);
    setSwitc4(false);
    setSwitc5(false);
  };
  const switchActive2 = () => {
    setSwitc2(true);
    setSwitc1(false);
    setSwitc3(false);
    setSwitc4(false);
    setSwitc5(false);
  };
  const switchActive3 = () => {
    setSwitc3(true);
    setSwitc1(false);
    setSwitc2(false);
    setSwitc4(false);
    setSwitc5(false);
  };
  const switchActive4 = () => {
    setSwitc4(true);
    setSwitc1(false);
    setSwitc2(false);
    setSwitc3(false);
    setSwitc5(false);
  };
  const switchActive5 = () => {
    setSwitc5(true);
    setSwitc1(false);
    setSwitc2(false);
    setSwitc3(false);
    setSwitc4(false);
  };

  const supports = [
    "তোমার পছেন্দের কোর্সটি সেলেক্ট করো",
    "পেমেন্ট অপশনে গিয়ে পেমেন্ট করো",
    "প্রাইভেট ডিসকর্ড গ্রুপের মাধ্যমে পেয়ে যাবা সকল প্রশ্নের উত্তর খুবই অরগানাইজ ভাবে",
    "উইকলি/মান্থলি থাকছে মেন্টরের সাথে লাইভ প্রব্লেম সল্ভিং এর সুবিধা",
    "কোর্স শেষে আমাদের জব প্যানেল দিবে তোমাকে ultimate গাইডলাইন টু গেট ইউওর ড্রিম জব",
  ];

  return (
    <div id="support" className="sec-background">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="switchBar"
      >
        <div className="switches">
          <div
            className={switc1 ? "switchArea active" : "switchArea"}
            onClick={() => switchActive1()}
          >
            <div className="switch"></div>
            <p>Step 1</p>
          </div>
          <div
            className={switc2 ? "switchArea active" : "switchArea"}
            onClick={() => switchActive2()}
          >
            <div className="switch"></div>
            <p>Step 2</p>
          </div>
          <div
            className={switc3 ? "switchArea active" : "switchArea"}
            onClick={() => switchActive3()}
          >
            <div className="switch"></div>
            <p>Step 3</p>
          </div>
          <div
            className={switc4 ? "switchArea active" : "switchArea"}
            onClick={() => switchActive4()}
          >
            <div className="switch"></div>
            <p>Step 4</p>
          </div>
          <div
            className={switc5 ? "switchArea active" : "switchArea"}
            onClick={() => switchActive5()}
          >
            <div className="switch"></div>
            <p>Step 5</p>
          </div>
        </div>
        <div className="line s-bg"></div>
      </motion.div>

      <motion.h1
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.7 }}
        className="primary-text"
      >
        কিভাবে তুমি আমাদের থেকে <span className="textGradient"> সাপোর্ট</span>{" "}
        পাবে?
      </motion.h1>

      {switc1 && (
        <motion.p
          whileInView={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ duration: 0.7 }}
          className="supportText nav-bg"
        >
          {supports[0]}
        </motion.p>
      )}
      {switc2 && (
        <motion.p
          whileInView={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ duration: 0.7 }}
          className="supportText nav-bg"
        >
          {supports[1]}
        </motion.p>
      )}
      {switc3 && (
        <motion.p
          whileInView={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ duration: 0.7 }}
          className="supportText nav-bg"
        >
          {supports[2]}
        </motion.p>
      )}
      {switc4 && (
        <motion.p
          whileInView={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ duration: 0.7 }}
          className="supportText nav-bg"
        >
          {supports[3]}
        </motion.p>
      )}
      {switc5 && (
        <motion.p
          whileInView={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ duration: 0.7 }}
          className="supportText nav-bg"
        >
          {supports[4]}
        </motion.p>
      )}
    </div>
  );
};

export default Support;
