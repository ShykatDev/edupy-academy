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

const CourseCategory = () => {
  return (
    <div id="courseCategory" className="sec-background">
      <div className="left-col">
        <div className="gradient1"></div>
        <motion.h1
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.7, delay: 0 }}
          className="primary-text"
        >
          সবকিছু শেখার
          <span className="textGradient"> এক এবং অন্যতম</span> জায়গা
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="secondary-text"
        >
          যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
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
            <Link to="/" className="category-item">
              <img src={kids} alt="" />
              <h2>কিড জোন</h2>
              <small className="secondary-text">
                ৫ - ৯ ক্লাসের সকল কন্টেন্ট দেখতে এখানে যাও
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Link to="/" className="category-item">
              <img src={creativity} alt="" />
              <h2>ক্রিয়েটিভিটি</h2>
              <small className="secondary-text">
                graphics, motion, illustrations সকল কন্টেন্ট দেখতে এখানে যাও
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <Link to="/" className="category-item">
              <img src={development} alt="" />
              <h2>ডেভেলপমেন্ট</h2>
              <small className="secondary-text">
                কোডিং রিলেটেড সকল কন্টেন্ট দেখতে এখানে যাও
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <Link to="/" className="category-item">
              <img src={self} alt="" />
              <h2>সেলফ গ্রোথ</h2>
              <small className="secondary-text">
                নিজেকে প্রফেশনাল করার সকল কন্টেন্ট দেখতে এখানে যাও
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.7 }}
          >
            <Link to="/" className="category-item">
              <img src={ssc} alt="" />
              <h2>একাডেমিক</h2>
              <small className="secondary-text">
                ভর্তি পরিক্ষা, চাকরির পরিক্ষা, ILTS, Higher Education সকল
                কন্টেন্ট দেখতে এখানে যাও
              </small>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
            transition={{ duration: 0.7, delay: 1.9 }}
          >
            <Link to="/" className="category-item">
              <img src={extra} alt="" />
              <h2>এক্সট্রা এক্টিভিটিস</h2>
              <small className="secondary-text">
                এক্সট্রা অরডিনারি হওয়ার সকল কন্টেন্ট দেখতে এখানে যাও
              </small>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
