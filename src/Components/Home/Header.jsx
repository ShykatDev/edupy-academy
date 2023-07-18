import React from "react";
import { Link } from "react-router-dom";
import {
  boy,
  circle,
  end,
  girl,
  money,
  peoples,
  place,
  seminar,
  start,
  student,
  user,
} from "../../assets";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div id="header" className="background">
      <div className="gradient1"></div>
      <div className="gradient2"></div>
      <div className="details">
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="left-col"
        >
          <h2 className="primary-text">শিখবে তুমি সহজ ভাবে</h2>
          <h1 className="primary-text">
            শেখাবো আমরা <br />
            <span className="textGradient"> গল্পবলে</span>
          </h1>
          <img src={circle} alt="" className="circle" />
        </motion.div>
        <motion.div
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 1 }}
          className="right-col"
        >
          <p className="secondary-text">
            অনলাইন শিক্ষার জন্য একটি ওয়েবসাইট যা পাঠকের সাথে সংযোগ স্থাপন করে
            এবং আধুনিক শিক্ষা সুবিধা সরবরাহ করে।
          </p>

          <div className="btn-group">
            <Link to="/batch" className="linkBtn">
              <button className="hbtn">
                <img src={peoples} alt="" className="ico" />
                <p> নতুন ব্যাচ </p>
              </button>
            </Link>

            <Link to="/batch" className="linkBtn">
              <button className="sbtn">
                <img src={seminar} alt="" className="ico" />
                <p className="secondary-text">ফ্রি সেমিনার </p>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 1.3 }}
        className="review-section"
      >
        <div className="star-review">
          <h1>4.7</h1>
          <div>
            <div className="stars">
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
            </div>
            <small className="primary-text">100+ review</small>
          </div>
        </div>
        <div className="text-review">
          <div className="bubble">
            <p className="">
              🏆 <span>This is the best online platform</span>
            </p>
          </div>
          <div className="user">
            <img src={user} alt="" />
          </div>
        </div>
      </motion.div>

      <div className="banner">
        <motion.img
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          src={student}
          alt=""
          className="student"
        />
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="content bannerBg"
        >
          <div className="illustrations">
            <img src={boy} alt="" className="boy" />
            <img src={girl} alt="" className="girl" />
          </div>
          <div className="details">
            <p className="banner-title">Successfully done!</p>
            <h1 className="primary-text">
              সফলভাবে করা <span>ইভেন্ট</span>
            </h1>
            <h2 className="textGradient" style={{ textAlign: "end" }}>
              Divisional level cultural competition
            </h2>
            <p style={{ textAlign: "end" }} className="secondary-text desc">
              স্মার্ট বাংলাদেশ গড়ে তোলার জন্য সাংস্কৃতিক উন্নয়ন অত্যন্ত জরুরি
              একটি বিষয় যার প্রয়োজনীয়তা অনুধাবন করেই মাননীয় প্রধানমন্ত্রী তৃণমূল
              পর্যায়ে গিয়ে মেধাবীদের তুলে নিয়ে আসার আদেশ প্রদান করেছেন। সেই
              আদেশকে সামনে রেখেই আমরা, Edupy পরিবার রাজশাহী বিভাগের মেধাবীদের
              এগিয়ে নিয়ে এসে তাদের প্রশিক্ষিত করার প্রয়াস গ্রহণ করেছি, যা
              সরকারের সহায়তায় একটি বড় রূপ ধারণ করতে পারে।
            </p>
            <div className="seminarPlace">
              <img src={place} alt="" />
              <p className="primary-text">রবীন্দ্র বিশ্ববিদ্যালয়, বাংলাদেশ</p>
            </div>
            {/* <div className="timing">
              <div className="start">
                <img src={start} alt="" />
                <div className="time">
                  <h2>এনরোলমেন্ট শুরু</h2>
                  <p className="secondary-text">01 July, 2023</p>
                </div>
              </div>
              <div className="end">
                <img src={end} alt="" />
                <div className="time">
                  <h2>এনরোলমেন্ট শেষ</h2>
                  <p className="secondary-text">01 July, 2023</p>
                </div>
              </div>
            </div>
            <h2 className="price primary-text">
              কোর্স ফি <span>6500</span> টাকা মাত্র
            </h2>
            <div className="btn-group">
              <Link to="/batch" className="linkBtn">
                <button className="sbtn">
                  <img src={seminar} alt="" className="ico" />
                  <p className="secondary-text">ফ্রি সেমিনার </p>
                </button>
              </Link>
              <Link to="/batch" className="linkBtn">
                <img src={money} alt="" className="cash" />
                <button>
                  <img src={peoples} alt="" className="ico" />
                  <p>এখনি শুরু করো</p>
                </button>
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
