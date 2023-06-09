import React, { useState } from "react";
import Slider from "react-slick";
import CourseCard from "../Cards/CourseCard";
import { course1, course2, course3, course4, course5 } from "../../assets";
import { motion } from "framer-motion";
import CoursePopup from "./CoursePopup";

const PopularCourses = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
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

  const [popup, setPopup] = useState(false);

  return (
    <div id="popularCourses" className="sec-background">
      {popup && <CoursePopup setPopup={setPopup} />}

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="back"
      >
        <div className="grad1"></div>
        <div className="grad2"></div>
        <div className="grad3"></div>
      </motion.div>
      <div className="front">
        <motion.h1
          whileInView={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="primary-text"
        >
          পপুলার <span className="textGradient"> কোর্স </span>সমূহ
        </motion.h1>
        <motion.p
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="secondary-text sec-subTitle"
        >
          যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
        </motion.p>

        <motion.div
          className="slider"
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Slider {...settings}>
            <div>
              <CourseCard
                setPopup={setPopup}
                banner={course1}
                title="এডভান্স পাইথন প্রোগ্রামিং"
                mentor="Mehedi Hasan"
                price="2000"
                desc="এই পাইথন কোর্সে প্রগ্রামিং কে অনেক সহজ করে বোঝানো হয়েছে এবং বেসিক থেকে এডভান্স সব টপিক কভার করা হয়েছে"
                nos="67"
                bestSeller={true}
              />
            </div>
            <div>
              <CourseCard
                setPopup={setPopup}
                banner={course2}
                title="ফ্রন্টএন্ড ডেভেলপমেন্ট"
                mentor="Shykat Raha"
                price="5100"
                desc="This course is exactly which you are looking for master python programming"
                nos="50"
                bestSeller={false}
              />
            </div>
            <div>
              <CourseCard
                setPopup={setPopup}
                banner={course3}
                title="3D গেম ডেভেলপমেন্ট"
                mentor="Shykat Raha"
                price="18000"
                desc="This course is exactly which you are looking for master python programming"
                nos="10"
                bestSeller={true}
              />
            </div>
            <div>
              <CourseCard
                setPopup={setPopup}
                banner={course4}
                title="ক্রিয়াটিভ illustration"
                mentor="Tanmay Dash"
                price="700"
                desc="This course is exactly which you are looking for master python programming"
                nos="76"
                bestSeller={false}
              />
            </div>
            <div>
              <CourseCard
                setPopup={setPopup}
                banner={course5}
                title="ক্রিয়াটিভ video editing"
                mentor="Tanmay Dash"
                price="700"
                desc="This course is exactly which you are looking for master python programming"
                nos="76"
                bestSeller={false}
              />
            </div>
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default PopularCourses;
