import React from "react";
import { envelop, logo, map, payment, phone } from "../../assets";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = ({ darkTheme }) => {
  return (
    <div id="footer" className={darkTheme ? "dark" : "light"}>
      <div className="content footer-bg">
        <div className="top">
          <div className="logo-area">
            <img src={logo} alt="" />
            <small className="primary-text">
              আমরা এখানে আমাদের দক্ষতা, কৌশল এবং শিক্ষাগত জ্ঞান ভাগ করে নিয়েছি
              ভবিষ্যতের জন্য।
            </small>

            <div className="socials">
              <Link to="https://www.facebook.com/edupyacademy">
                <FaFacebookF className="ico primary-text" />
              </Link>
              <Link to="https://www.instagram.com/edupyacademy/?hl=en">
                <FaInstagram className="ico primary-text" />
              </Link>
              <Link to="https://www.facebook.com/edupyacademy">
                <FaLinkedin className="ico primary-text" />
              </Link>
              <Link to="https://www.youtube.com/@Edupybd">
                <FaYoutube className="ico primary-text" />
              </Link>
            </div>
          </div>
          <div className="company">
            <p className="title">কোম্পানি</p>

            <Link to="/about-us" className="footer-link secondary-text">
              আমাদের সম্পর্কে
            </Link>
            <Link to="/refund" className="footer-link secondary-text">
              রিফান্ড পলিসি
            </Link>
            <Link to="/privacy" className="footer-link secondary-text">
              প্রাইভেসী পলিসি
            </Link>
            <Link to="/terms" className="footer-link secondary-text">
              টার্মস এবং শর্তাবলী
            </Link>
          </div>
          <div className="others">
            <p className="title">কুইক লিংক</p>

            <Link to="/upcoming-batch" className="footer-link secondary-text">
              আপকামিং লাইভ ব্যাচ
            </Link>
            <Link
              to="/free-live-classes"
              className="footer-link secondary-text"
            >
              ফ্রী লাইভ ক্লাস
            </Link>
            <Link to="/live-workshop" className="footer-link secondary-text">
              লাইভ ওয়ার্কশপ
            </Link>
            <Link to="/all-courses" className="footer-link secondary-text">
              সকল কোর্স
            </Link>
            <Link to="/blogs" className="footer-link secondary-text">
              ব্লগ
            </Link>
          </div>
          <div className="social-media">
            <p className="title">যোগাযোগ</p>

            <span className="secondary-text">
              <img src={phone} alt="" />
              01315-851280
            </span>
            <span className="secondary-text">
              <img src={envelop} alt="" />
              ceo.edupybd@gmail.com
            </span>
            <span className="secondary-text">
              <img src={map} alt="" />
              Mirpur,Dhaka 1216, Dhaka, Bangladesh
            </span>
          </div>
        </div>

        <div className="middle"></div>

        <div className="bottom nav-bg">
          <small className="secondary-text">
            স্বত্ব © ২০২৩ edupy academy কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
