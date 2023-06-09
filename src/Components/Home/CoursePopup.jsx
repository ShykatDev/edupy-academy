import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CoursePopup = ({ setPopup }) => {
  return (
    <div id="coursePopup">
      <div className="content sec-background">
        <BsFillXCircleFill
          onClick={() => setPopup(false)}
          className="closePopup primary-text"
        />

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fr1f84rg4Nw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <small className="bestSeller">Best Seller</small>

        <div className="details">
          <div className="left-col">
            <h2 className="primary-text">Python Tutorial For Beginners</h2>
            <small className="star">Code with Harry</small>
            <p>
              Python is a computer programming language often used to build
              websites and software, automate tasks, and conduct data analysis.
              Python is a general-purpose language, meaning it can be used to
              create a variety of different programs and isn't specialized for
              any specific problems.
            </p>
          </div>
          <div className="right-col">
            <ul>
              <li className="primary-text">
                <img src="" alt="" />
                <p>Level: </p>
                <p>Beginner</p>
              </li>
              <li className="primary-text">
                <img src="" alt="" />
                <p> 16 Lessons (2 hour 36 min)</p>
              </li>
              <li className="primary-text">
                <img src="" alt="" />
                <p>89 Students Enrolled</p>
              </li>
              <li className="primary-text">
                <img src="" alt="" />

                <p>90% Posetive Reviews</p>
              </li>
              <li className="primary-text">
                <img src="" alt="" />
                <p>Audio Bangla</p>
              </li>
              <li className="primary-text">
                <img src="" alt="" />
                <p>Online and at your own pace</p>
              </li>
            </ul>
            <button className="hbtn">
              <Link to="/">এনরল করো</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
