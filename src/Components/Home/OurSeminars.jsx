import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import SeminarsCard from "../Cards/SeminarsCard";
import {
  s1p1,
  s1p2,
  s1p3,
  s1p4,
  s2p1,
  s2p2,
  s2p3,
  s2p4,
  s3p1,
  s3p2,
  s3p3,
  s3p4,
} from "../../assets";

const OurSeminars = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
  return (
    <div id="ourSeminars" className="sec-background">
      <div className="intro">
        <motion.h1
          whileInView={{ opacity: [0, 1], y: [-50, 0] }}
          transition={{ duration: 0.7, delay: 0 }}
          className="primary-text"
        >
          আমাদের <span className="textGradient">সেমিনার</span> সমূহ
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], y: [-50, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="secondary-text"
        >
          আমরা বাংলাদেশের বিভিন্ন ইউনিভার্সিটিতে ফ্রি সেমিনারের মাধ্যমে
          শিক্ষার্থীদের মধ্যে মডার্ন টেকনোলজি সম্পর্কে ধারণা দিয়ে থাকি
        </motion.p>
      </div>

      <div className="seminars-slider">
        <Slider {...settings}>
          <div>
            <SeminarsCard
              title="EMPOWERING JUNIORS WITH CODING SKILLS AND CYBER AWARENESS"
              date="17 জুলাই, 2023"
              plc="শাহজাদপুর ইব্রাহিম পাইলট গার্লস স্কুল, সিরাজগঞ্জ"
              vidSrc="https://www.youtube.com/embed/ZArkRdSufDw"
              sp1={s3p1}
              sp2={s3p2}
              sp3={s3p3}
              sp4={s3p4}
            />
          </div>
          <div>
            <SeminarsCard
              title="EMPOWERING JUNIORS WITH CODING SKILLS AND CYBER AWARENESS"
              date="25 জুন, 2023"
              plc="রংধনু মডেল স্কুল, সিরাজগঞ্জ"
              vidSrc="https://www.youtube.com/embed/xNQrm1Rivws"
              sp1={s2p1}
              sp2={s2p2}
              sp3={s2p3}
              sp4={s2p4}
            />
          </div>
          <div>
            <SeminarsCard
              title="CODING For All And Soft skill"
              date="14 জুন, 2023"
              plc="পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়, পাবনা"
              vidSrc="https://www.youtube.com/embed/CmEom-ooLmc"
              sp1={s1p1}
              sp2={s1p2}
              sp3={s1p3}
              sp4={s1p4}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurSeminars;
