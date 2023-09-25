import React, { useState, useEffect } from "react";
import { checked, client, course2 } from "../../assets";
import Pagination from "../UI/Pagination";
import JobCard from "./JobCard";

const SingleJob = ({ darkTheme }) => {
  const jobsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
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
    <div id="singleJob" className={!darkTheme ? "dark" : "light"}>
      <main className="background">
        <div className="title">
          <small className="secondary-text">Good Evening</small>
          <h2 className="primary-text">Job Details</h2>
        </div>
        <div className="content">
          <div className="apply-area">
            <img src={course2} alt="" />

            <div className="apply">
              <h4 className="primary-text">Activity on this job</h4>
              <p className="secondary-text">
                Total Application: <span className="primary-text">30</span>
              </p>

              <div className="line"></div>

              <button className="hbtn">Apply Now</button>
            </div>
          </div>
          <div className="details-area">
            <small className="jobCategory">Web Development</small>
            <h1 className="primary-text">
              Landing Page template create with easy drag and drop
              functionality.
            </h1>
            <p className="time secondary-text">Posted on: 12/08/2023</p>

            <div className="line"></div>

            <p className="description secondary-text">
              I am looking to create an outreach programme where I present a
              landing page/website to potential clients in the hope they
              purchase it. With this being said, I will need a simple landing
              page created which I can easily edit and change dependent on the
              client I am reaching out to
            </p>

            <div className="line"></div>

            <div className="budget">
              <p className="secondary-text">
                Total Budget: <span className="textGradient">৳ 10000</span>
              </p>
            </div>

            <div className="line"></div>

            <div className="skills">
              <h3 className="secondary-text">Skills and Expertise</h3>
              <div className="skill-items">
                <div className="skill">
                  <span className="secondary-text">Web Development</span>
                </div>
                <div className="skill">
                  <span className="secondary-text">HTML</span>
                </div>
                <div className="skill">
                  <span className="secondary-text">CSS</span>
                </div>
                <div className="skill">
                  <span className="secondary-text">JavaScript</span>
                </div>
                <div className="skill">
                  <span className="secondary-text">Web Design</span>
                </div>
              </div>
            </div>
          </div>
          <div className="client-area">
            <h3 className="secondary-text">About the Client</h3>
            <div className="user">
              <img src={client} alt="" />
              <p className="primary-text">User Name</p>
            </div>
            <div className="line"></div>
            <div className="checkPrice">
              <img src={checked} alt="" />
              <small className="secondary-text">Payment method verified</small>
            </div>
            <p className="det secondary-text">
              Location: <span className="primary-text">Bangladesh</span>
            </p>
            <p className="det secondary-text">
              Total posted jobs: <span className="primary-text">10</span>
            </p>
            <p className="det secondary-text">
              Active jobs: <span className="primary-text">1</span>
            </p>
          </div>
        </div>

        <div className="relatedJobs">
          <div className="bar">
            <p className="secondary-text">Related available jobs</p>
          </div>

          <div className="jobs">
            <div className="jobsCard">
              {currentJobs.map((j) => {
                return <JobCard />;
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
        </div>
      </main>
    </div>
  );
};

export default SingleJob;
