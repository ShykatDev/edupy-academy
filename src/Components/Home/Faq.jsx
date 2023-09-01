import React from "react";
import { all, checked, rocket } from "../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <div id="FAQ" className="sec-background">
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="left-col"
      >
        <img src={rocket} alt="" className="rocket" />
        <h1 className="primary-text">
          কেন <span className="textGradient"> Edupy Academy</span> থেকেই শুরু
          করবেন?
        </h1>
        <p className="secondary-text">
          এক নজরে দেখে নিন আমরা আপনাকে কিভাবে প্রতিটা ধাপ পার করিয়ে দিবো
        </p>

        <Link to="/batch" className="linkBtn">
          <button className="hbtn">
            <img src={all} alt="" className="ico" />
            <p>এখনই শুরু করুন</p>
          </button>
        </Link>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="ans-col"
      >
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> ইন্ডাস্ট্রি এক্সপার্টদের কন্টেন্ট
          </h3>
          <p className="secondary-text">
            আমাদের প্রতিটা কন্টেন্ট ইন্ডাস্ট্রির টপ এক্সপার্টদের সরাসরি সাপোর্ট,
            গাইডেন্স ও ফিডব্যাক দিয়ে বানানো।
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> মেন্টরদের সরাসরি সাপোর্ট
          </h3>
          <p className="secondary-text">
            কোর্স করতে গিয়ে সমস্যায় পড়লে নির্দিষ্ট সাপোর্ট আওয়ারে যোগাযোগ করলেই
            সমাধান পাবেন আমাদের অভিজ্ঞ মেন্টরদের কাছ থেকে।
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> প্রজেক্ট ও অ্যাসাইনমেন্ট
          </h3>
          <p className="secondary-text">
            মার্কেট স্ট্যান্ডার্ড প্র্যাকটিক্যাল প্রজেক্ট ও অ্যাসাইনমেন্ট করানো
            হবে, যেগুলো নিজের পোর্টফোলিওতে যুক্ত করতে পারবেন।
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> ফ্রিল্যান্সিং সাপোর্ট
          </h3>
          <p className="secondary-text">
            কোর্স শেষে ফ্রিল্যান্সিং করতে চাইলে তার বিস্তারিত গাইডলাইন আর
            সাপোর্ট দেয়া হবে।
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> জব ও ইন্টার্নশিপের সম্ভাবনা
          </h3>
          <p className="secondary-text">
            বেস্ট পারফর্মারদের জব ক্যান্ডিডেট প্রোফাইল সরাসরি শেয়ার করা হবে
            আমাদের পার্টনার প্রতিষ্ঠানগুলোর সাথে।
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> ক্যারিয়ার ও ইন্টারভিউ প্রস্তুতি
          </h3>
          <p className="secondary-text">
            আপনার সিভি, LinkedIn প্রোফাইল, GitHub প্রোফাইল আর চাকরির ইন্টারভিউর
            ব্যাপারে সরাসরি সাপোর্ট পাবেন আমাদের কাছে।
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> ভেরিফাইড সার্টিফিকেট
          </h3>
          <p className="secondary-text">
            কোর্স শেষে আপনার পারফরম্যান্সের উপর গ্রেডিং করা হবে। সে অনুযায়ী আপনি
            বহুব্রীহি থেকে সার্টিফিকেট পাবেন।
          </p>
        </div>
        <div className="row">
          <h3>
            <img src={checked} alt=""></img> সুবিধামতো সময়ে শেখা
          </h3>
          <p className="secondary-text">
            নিজের সুবিধামতো সময়ে ও গতিতে আমাদের কোর্সের লার্নিং ম্যাটেরিয়ালগুলো
            থেকে শিখতে পারবেন আপনি।
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
