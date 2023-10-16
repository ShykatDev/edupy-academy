import React, { useState, useEffect } from "react";
import {
  checked,
  dashboard,
  dashboardBG,
  information,
  map,
  noResult,
  talent,
} from "../../assets";
import { BiEdit } from "react-icons/bi";
import { BsGlobeAmericas, BsBehance, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Pagination from "../UI/Pagination";
import WinJob from "./WinJob";
import { Link } from "react-router-dom";

const TalentDashboard = ({ darkTheme }) => {
  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(false);
  const [completed, setCompleted] = useState(false);

  const jobsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setTotalData(data);
        console.log(data);
      });
  }, []);

  const lastPage = currentPage * jobsPerPage;
  const firstPage = lastPage - jobsPerPage;

  const currentJobs = totalData.slice(firstPage, lastPage);
  return (
    <div id="talentProfile" className={!darkTheme ? "dark" : "light"}>
      <main className="background">
        <div className="left">
          <div className="profilePic">
            <img src={dashboardBG} alt="" />
          </div>
          <h3 className="primary-text">Activity</h3>
          <div className="activity">
            <small className="secondary-text earning">
              Total Earning: <span className="primary-text">৳ 10000</span>
            </small>
            <small className="secondary-text">
              Total Applied Job: <span className="primary-text">13</span>
            </small>
            <small className="secondary-text">
              Job Completed: <span className="primary-text">7</span>
            </small>
            <small className="secondary-text">
              Success Ratio: <span className="primary-text">70%</span>
            </small>
          </div>
          <div className="line"></div>

          <h3 className="primary-text">Skills</h3>
          <div className="skills">
            <small className="skill primary-text">Branding</small>
            <small className="skill primary-text">UI/UX Design</small>
            <small className="skill primary-text">Web Design</small>
            <small className="skill primary-text">HTML</small>
            <small className="skill primary-text">CSS</small>
            <small className="skill primary-text">JavaScript</small>
          </div>
          <div className="line"></div>
          <h3 className="primary-text">Badge Earned</h3>
          <div className="tests">
            <div className="test">
              <div className="testDetails">
                <img src={checked} alt="" />
                <small className="secondary-text">Web Development</small>
              </div>
              <small className="level secondary-text">Expert</small>
            </div>
            <div className="test">
              <div className="testDetails">
                <img src={checked} alt="" />
                <small className="secondary-text">Content Writting</small>
              </div>
              <small className="level secondary-text">Beginner</small>
            </div>
            <div className="test">
              <div className="testDetails">
                <img src={checked} alt="" />
                <small className="secondary-text">Graphic Design</small>
              </div>
              <small className="level secondary-text">Intermidiate</small>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="userDetails">
            <div className="bar">
              <div className="top-line">
                <h1 className="primary-text">Dashboard</h1>
                <div className="location">
                  <img src={map} alt="" />
                  <small className="secondary-text">Dhaka, Bangladesh</small>
                </div>
              </div>

              <button className="editProfile">
                <BiEdit className="editBtn primary-text" />
                <small className="primary-text">Edit</small>
              </button>
            </div>
            <small className="tag">Web Developer</small>
            <p className="bio secondary-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              aperiam ab harum, vitae deleniti ducimus minus quas odit odio hic
              similique recusandae provident nobis in! Eveniet architecto modi
              facere nostrum. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Laudantium magnam nostrum dolore, aperiam vitae
              pariatur, incidunt modi, quidem quaerat blanditiis similique
              distinctio? Fugit autem minus ad. Similique, eaque eveniet vel
              aliquam tempore officia nemo, harum repudiandae est, iure omnis
              laudantium!
            </p>
          </div>

          <div className="content-btns">
            <button
              className={
                btn1 && !btn2 ? "active secondary-text" : "secondary-text"
              }
              onClick={() => {
                setbtn1(true);
                setbtn2(false);
              }}
            >
              <img src={dashboard} alt="" />
              Timeline
            </button>
            <button
              className={
                btn2 && !btn1 ? "active secondary-text" : "secondary-text"
              }
              onClick={() => {
                setbtn1(false);
                setbtn2(true);
              }}
            >
              <img src={information} alt="" />
              About
            </button>
          </div>

          {btn1 && (
            <div className="timeline-content">
              <p className="barTitle">Completed Jobs</p>

              {completed ? (
                <div className="jobs">
                  <div className="jobsCard">
                    {currentJobs.map((j) => {
                      return <WinJob />;
                    })}
                  </div>

                  <div className="pagination">
                    <Pagination
                      total={totalData.length}
                      perPage={jobsPerPage}
                      setCurrentPage={setCurrentPage}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              ) : (
                <div className="noContent">
                  <img src={noResult} alt="" />
                  <small className="secondary-text">No result found</small>
                </div>
              )}
            </div>
          )}

          {btn2 && (
            <div className="about-content">
              <p className="barTitle">Basic Information</p>
              <div className="info">
                <small className="primary-text">Birthday: 12 Jan, 2001</small>
                <small className="primary-text">Gender: Male</small>
                <small className="primary-text">Member Since: 2021</small>
                <small className="primary-text">
                  Education: Dhaka University of Bangladesh
                </small>
              </div>

              <p className="barTitle2">Contact Information</p>

              <div className="info">
                <small className="primary-text">
                  Email: shykat.wd@gmail.com
                </small>
                <small className="primary-text">
                  Address: Narail, Dhaka, Bangladesh
                </small>
                <small className="primary-text">Phone: +880 1879866202</small>
              </div>

              <p className="barTitle3">Social Media</p>

              <div className="social">
                <Link to="">
                  <FaFacebookF className="primary-text sio" />
                </Link>
                <Link to="">
                  <BsLinkedin className="primary-text sio" />
                </Link>
                <Link to="">
                  <BsGlobeAmericas className="primary-text sio" />
                </Link>
                <Link to="">
                  <BsBehance className="primary-text sio" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TalentDashboard;
