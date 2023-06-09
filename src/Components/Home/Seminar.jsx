import React from "react";
import {
  course5,
  course6,
  course7,
  course8,
  seminar,
  seminarBanner,
} from "../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import FreeCourseCard from "../Cards/FreeCourseCard";

const Seminar = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div id="seminar" className="sec-background">
        <div className="gradient1"></div>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0 }}
        className="upcomingSeminar bannerBg"
      >
        <div className="banner-col">
          <img src={seminarBanner} alt="" />
        </div>
        <div className="info-col">
          <small className="primary-text">Date: 01-07-2023</small>
          <h1 className="primary-text">
            সঠিক দিকনির্দেশনা পেতে{" "}
            <span className="textGradient">ফ্রি অনলাইন সেমিনারে</span> অংশ নাও
          </h1>
          <p className="secondary-text">
            সফল ক্যারিয়ার গড়ার সঠিক দিকনির্দেশনা পেতে আমাদের ফ্রি সেমিনারগুলোতে
            অংশগ্রহণ করো। এসব সেমিনারে প্রশ্নোত্তরের মাধ্যমে তুমি কনফিউশন দূর
            করতে পারবা
          </p>

          <Link to="/batch" className="linkBtn">
            <button>
              <img src={seminar} alt="" className="ico" />
              <p>ফ্রি সেমিনার </p>
            </button>
          </Link>
        </div>
      </motion.div>

      <div className="freeCourses">
        <div className="top-row">
          <motion.h1
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="primary-text"
          >
            ফ্রি
            <span className="textGradient"> কোর্স </span>সমূহ
          </motion.h1>
          <motion.p
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="secondary-text sec-subTitle"
          >
            যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
          </motion.p>
        </div>
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bottom-row"
        >
          <Slider {...settings}>
            <div>
              <FreeCourseCard
                banner={course6}
                title="এডভান্স পাইথন প্রোগ্রামিং"
                mentor="Mehedi Hasan"
                price="2000"
                desc="এই পাইথন কোর্সে প্রগ্রামিং কে অনেক সহজ করে বোঝানো হয়েছে এবং বেসিক থেকে এডভান্স সব টপিক কভার করা হয়েছে"
                nos="67"
                bestSeller={false}
              />
            </div>
            <div>
              <FreeCourseCard
                banner={course7}
                title="এডভান্স পাইথন প্রোগ্রামিং"
                mentor="Mehedi Hasan"
                price="2000"
                desc="এই পাইথন কোর্সে প্রগ্রামিং কে অনেক সহজ করে বোঝানো হয়েছে এবং বেসিক থেকে এডভান্স সব টপিক কভার করা হয়েছে"
                nos="67"
                bestSeller={true}
              />
            </div>
            <div>
              <FreeCourseCard
                banner={course8}
                title="এডভান্স পাইথন প্রোগ্রামিং"
                mentor="Mehedi Hasan"
                price="2000"
                desc="এই পাইথন কোর্সে প্রগ্রামিং কে অনেক সহজ করে বোঝানো হয়েছে এবং বেসিক থেকে এডভান্স সব টপিক কভার করা হয়েছে"
                nos="67"
                bestSeller={false}
              />
            </div>
            <div>
              <FreeCourseCard
                banner={course5}
                title="এডভান্স পাইথন প্রোগ্রামিং"
                mentor="Mehedi Hasan"
                price="2000"
                desc="এই পাইথন কোর্সে প্রগ্রামিং কে অনেক সহজ করে বোঝানো হয়েছে এবং বেসিক থেকে এডভান্স সব টপিক কভার করা হয়েছে"
                nos="67"
                bestSeller={false}
              />
            </div>
          </Slider>
          ;
        </motion.div>
      </div>
    </div>
  );
};

export default Seminar;
