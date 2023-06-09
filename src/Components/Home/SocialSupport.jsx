import React from "react";
import { discord, phone, socialSupport } from "../../assets";
import { Link } from "react-router-dom";

const SocialSupport = () => {
  return (
    <div id="socialSupport" className="sec-background">
      <div className="left-col">
        <h1 className="primary-text">
          সার্বক্ষণিক সহায়তার জন্য থাকছে{" "}
          <span className="textGradient">ডিসকোর্ড</span> সাপোর্ট চ্যানেল
        </h1>
        <p className="secondary-text">
          প্রতিটি কোর্সের জন্য আমরা একটি প্রাইভেট ডিসকোর্ড সাপোর্ট চ্যানেল তৈরী
          করেছি যেখানে কোর্স ইন্সট্রাক্টর সহ আরো 4-5 জন কোর্স মোডারেটর সরাসরি
          তোমাদের বিভিন্ন প্রশ্নের উত্তর দিবে। আমরা অঙ্গীকার করছি সর্বোচ্চ ২৪
          ঘণ্টার মধ্যে তোমাদের প্রশ্নের উত্তর দিতে পারবো। তবে অধিকাংশ ক্ষেত্রে
          তার চেয়েও কম সময়ে তোমরা উত্তর পেয়ে যাবে। এছাড়া প্রতি সপ্তাহে আলোচিত
          মডিউলের উপর লাইভ সেশন থাকবে যেখানে তোমরা সরাসরি প্রশ্ন করে উত্তর পেতে
          পারবে।
        </p>

        <div className="btn-group">
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
        </div>
      </div>
      <div className="right-col">
        <div className="gradient1"></div>
        <div className="gradient2"></div>
        <img src={socialSupport} alt="" />
      </div>
    </div>
  );
};

export default SocialSupport;
