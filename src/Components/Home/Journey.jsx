import React from "react";
import {
  advance,
  basic,
  demo,
  exam,
  job,
  lifeTime,
  path,
  peoples,
  seminar,
  work,
} from "../../assets";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import JourneyCard from "../Cards/JourneyCard";
import { motion } from "framer-motion";

const Journey = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="journey" className="sec-background">
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="left-slider"
      >
        <Slider {...settings}>
          <div>
            <JourneyCard
              topIco={seminar}
              bottomIco={demo}
              topText="ফ্রি সেমিনার"
              bottomText="ডেমো ক্লাস"
              topSum="ফ্রি সেমিনারের মাধ্যমে জানতে পারো কোর্স সম্পর্কে সকল তথ্য"
              bottomSum="কোর্স শুরু করার আগে থাকছে ফ্রি তে ডেমো ক্লাস করার সুযোগ"
              topNum="01"
              bottomNum="02"
            />
          </div>
          <div>
            <JourneyCard
              topIco={basic}
              bottomIco={advance}
              topText="বেসিক ট্রেনিং"
              bottomText="এডভান্স ট্রেনিং"
              topSum="বেসিক ট্রেনিং দিয়ে শুরু হবে তোমার জার্নি"
              bottomSum="আমরা শিখবো কোর্সের সকল এডভান্স বিষয় গুলো"
              topNum="03"
              bottomNum="04"
            />
          </div>
          <div>
            <JourneyCard
              topIco={exam}
              bottomIco={lifeTime}
              topText="এসেসমেন্ট"
              bottomText="লাইফ টাইম এক্সেস"
              topSum="কোর্স শেষে থাকছে নিজেকে যাচাই করার সুযোগ"
              bottomSum="লাইফ টাইম এক্সেস থাকার কারণে কোর্স করতে পারবা যে কোন সময়"
              topNum="05"
              bottomNum="06"
            />
          </div>
          <div>
            <JourneyCard
              topIco={job}
              bottomIco={work}
              topText="জব প্লেসমেন্ট"
              bottomText="ওয়ার্ক উইথ আস"
              topSum="আমাদের টিম কাজ করবে তোমার জব প্লেসমেন্ট এর জন্য"
              bottomSum="কোর্সের শেষে বাছাই করা স্টুডেন্টেরা পাবে আমাদের সাথে কাজ করার সুযোগ"
              topNum="07"
              bottomNum="08"
            />
          </div>
        </Slider>
      </motion.div>

      <motion.div
        whileInView={{ x: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="right-details"
      >
        <img src={path} alt="" className="path" />
        <h1 className="primary-text">
          এক নজরে আমাদের সাথে <span className="textGradient">তোমার জার্নি</span>
        </h1>
        <p className="secondary-text">
          যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
        </p>
        <div className="btn-group">
          <Link to="/batch" className="linkBtn">
            <button>
              <img src={peoples} alt="" className="ico" />
              <p> এখনই শুরু করো </p>
            </button>
          </Link>

          <Link to="/batch" className="linkBtn">
            <button>
              <img src={seminar} alt="" className="ico" />
              <p>ফ্রি সেমিনার </p>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Journey;
