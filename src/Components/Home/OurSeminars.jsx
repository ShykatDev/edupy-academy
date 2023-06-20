import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import SeminarsCard from "../Cards/SeminarsCard";

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
  return (
    <div id="ourSeminars" className="sec-background">
      <div className="intro">
        <h1 className="primary-text">
          আমাদের <span className="textGradient">সেমিনার</span> সমূহ
        </h1>
        <p className="secondary-text">
          আমরা বাংলাদেশের বিভিন্ন ইউনিভার্সিটিতে ফ্রি সেমিনারের মাধ্যমে
          শিক্ষার্থীদের মধ্যে মডার্ন টেকনোলজি সম্পর্কে ধারণা দিয়ে থাকি
        </p>
      </div>

      <div className="seminars-slider">
        <Slider {...settings}>
          <div>
            <SeminarsCard
              title="CODING For All And Soft skill"
              date="14 জুন, 2023"
              plc="পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়"
              vidSrc="https://www.youtube.com/embed/CmEom-ooLmc"
            />
          </div>
          {/* <div>
            <SeminarsCard
              title="EMPOWERING JUNIORS WITH CODING SKILLS AND CYBER AWARENESS"
              date="25 জুন, 2023"
              plc="শাহজাদপুর, সিরাজগঞ্জ"
              vidSrc="https://www.youtube.com/embed/6fo9gJ2nFdU"
            />
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default OurSeminars;
