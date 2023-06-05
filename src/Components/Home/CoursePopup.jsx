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
            <h2>Course Name</h2>
            <small>Mentor Name</small>
            <p>Description</p>
          </div>
          <div className="right-col">
            <ul>
              <li>
                <img src="" alt="" />
                <p>Level</p>
                <p>Beginner</p>
              </li>
              <li>
                <img src="" alt="" />
                <p> 16 Lessons (2 hour 36 min)</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>89 Students Enrolled</p>
              </li>
              <li>
                <img src="" alt="" />

                <p>90% Posetive Reviews</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>Audio Bangla</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>Online and at your own pace</p>
              </li>
            </ul>
            <button>
              <Link to="/">এনরল করো</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
