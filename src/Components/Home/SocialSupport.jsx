import React from "react";
import { discord, phone, socialSupport } from "../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SocialSupport = () => {
  return (
    <div id="socialSupport" className="sec-background">
      <div className="left-col">
        <motion.h1
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.7 }}
          className="primary-text"
        >
          সার্বক্ষণিক সহায়তার জন্য থাকছে{" "}
          <span className="textGradient">ডিসকোর্ড</span> সাপোর্ট চ্যানেল
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="secondary-text"
        >
          প্রতিটি কোর্সের জন্য আমরা একটি প্রাইভেট ডিসকোর্ড সাপোর্ট চ্যানেল তৈরী
          করেছি যেখানে কোর্স ইন্সট্রাক্টর সহ আরো 4-5 জন কোর্স মোডারেটর সরাসরি
          তোমাদের বিভিন্ন প্রশ্নের উত্তর দিবে। আমরা অঙ্গীকার করছি সর্বোচ্চ ২৪
          ঘণ্টার মধ্যে আপনাদের প্রশ্নের উত্তর দিতে পারবো। তবে অধিকাংশ ক্ষেত্রে
          তার চেয়েও কম সময়ে তোমরা উত্তর পেয়ে যাবেন। এছাড়া প্রতি সপ্তাহে লাইভ
          সেশন থাকবে যেখানে তোমরা সরাসরি প্রশ্ন করে উত্তর পেতে পারবেন।
        </motion.p>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="btn-group"
        >
          <Link to="/batch" className="linkBtn">
            <button className="sbtn">
              <img src={discord} alt="" className="ico" />
              <p className="secondary-text">ডিসকোর্ড চ্যানেল</p>
            </button>
          </Link>
          <Link to="/batch" className="linkBtn">
            <button className="sbtn">
              <img src={phone} alt="" className="ico" />
              <p className="secondary-text">সাপোর্ট সেন্টার</p>
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="right-col">
        <div className="gradient1"></div>
        <div className="gradient2"></div>
        <motion.img
          whileInView={{ opacity: [0, 1], x: [20, 0] }}
          transition={{ duration: 0.7, delay: 0.7 }}
          src={socialSupport}
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialSupport;
