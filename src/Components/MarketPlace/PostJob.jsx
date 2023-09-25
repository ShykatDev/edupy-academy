import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Pagination from "../UI/Pagination";
import JobCard from "./JobCard";
import { Link as ScrollLink } from "react-scroll";

const PostJob = ({ darkTheme }) => {
  const [termsActive, setTermsActive] = useState(false);
  const [jobCategory, setJobCategory] = useState(false);
  const [selectColor, setSelectColor] = useState(false);

  
  const jobsPerPage = 12;
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

  const changleSelect = (e) => {
    setSelectColor(false);
    setJobCategory(e.target.value);

    if (e.target.value === "select") {
      setSelectColor(true);
    }
  };

  return (
    <div id="postJob" className={!darkTheme ? "dark" : "light"}>
      <main className="background">
        <div className="grettings">
          <small className="primary-text">
            Good Evening, <span>Shykat Raha</span>
          </small>
          <div className="note">
            <div className="top jc2 primary-text">
              <p className="nt">
                Before post a new job, please read the terms and conditions
              </p>

              <p
                className={
                  termsActive
                    ? "t_c jc1 primary-text"
                    : "t_c primary-text underline"
                }
                onClick={() => setTermsActive(!termsActive)}
              >
                {termsActive ? (
                  <AiOutlineClose className="primary-text" />
                ) : (
                  "Terms & Conditions"
                )}
              </p>
            </div>
            {termsActive && (
              <motion.div
                whileInView={{ opacity: [0, 1], y: [-20, 0] }}
                transition={{ duration: 0.3 }}
                className="terms"
              >
                <ul>
                  <li className="secondary-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quia, molestiae.
                  </li>
                  <li className="secondary-text">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li className="secondary-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos voluptas saepe ex totam minima deserunt.
                  </li>
                  <li className="secondary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, eveniet?
                  </li>
                  <li className="secondary-text">Lorem ipsum dolor sit amet.</li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
        <div className="content">
          <div className="staticDetails">
            <h4 className="primary-text">
              Total Talent: <span>40</span>
            </h4>

            <div className="categories">
              <h4 className="title primary-text">Categories</h4>
              <div className="lists">
                <p className="list secondary-text">Logo Design</p>
                <p className="list secondary-text">Video Editing</p>
                <p className="list secondary-text">Data Entry</p>
                <p className="list secondary-text">Graphic Design</p>
                <p className="list secondary-text">Content Writing</p>
                <p className="list secondary-text">Web Development</p>
              </div>
            </div>
            <div className="job-details">
              <h4 className="primary-text">
                Total Job: <span>100</span>
              </h4>
              <h4 className="primary-text">
                Completed Job: <span>70</span>
              </h4>
            </div>
          </div>

          <div className="postFormArea">
            <div className="titleBar">
              <h2 className="primary-text">Post a new Job</h2>

              <ScrollLink
                className="allCategory primary-text"
                to="allJobs"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
              >
                View All Job
              </ScrollLink>
            </div>
            <div className="formArea">
              <form action="">
                <div className="form-content">
                  <div className="left-area">
                    <div className="inp-grp">
                      <label htmlFor="">
                        Job Title <span>*</span>
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="jc1 secondary-text"
                        placeholder="Enter you job title"
                        required
                      />
                    </div>
                    <div className="inp-grp">
                      <label htmlFor="">
                        Job Category <span>*</span>
                      </label>
                      <select
                        onChange={changleSelect}
                        value={jobCategory}
                        className="jc1 secondary-text changedColor"
                        name=""
                        id=""
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="a" className="secondary-text">
                          Logo Design
                        </option>
                        <option value="b" className="secondary-text">
                          Video Editing
                        </option>
                        <option value="c" className="secondary-text">
                          Data Entry
                        </option>
                        <option value="d" className="secondary-text">
                          Graphic Design
                        </option>
                        <option value="e" className="secondary-text">
                          Content Writing
                        </option>
                        <option value="f" className="secondary-text">
                          Web Development
                        </option>
                      </select>
                    </div>
                    <div className="inp-grp">
                      <label htmlFor="">
                        Total Budget <span>*</span>
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="jc1 secondary-text"
                        placeholder="10000 taka"
                        required
                      />
                    </div>
                    <div className="inp-grp">
                      <label htmlFor="">
                        Tags <span>*</span>
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="jc1 secondary-text"
                        placeholder="Website, Graphic, Editing"
                        required
                      />
                    </div>
                    <div className="inp-grp">
                      <label htmlFor="">
                        Cover Photo <span>*</span>
                      </label>
                      <input
                        type="file"
                        name=""
                        id=""
                        className="jc1 secondary-text"
                        required
                      />
                    </div>
                  </div>
                  <div className="right-area">
                    <div className="inp-grp">
                      <label htmlFor="">
                        Job Description <span>*</span>
                      </label>
                      <textarea
                        name=""
                        id=""
                        className="jc1 secondary-text"
                        placeholder="Enter the full description here"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bottomRow">
                  <div className="agree">
                    <input type="checkbox" name="" id="" required />
                    <small className="secondary-text">
                      I have read and agree to the{" "}
                      <span onClick={() => setTermsActive(true)}>
                        terms & conditions
                      </span>
                    </small>
                  </div>
                  <button type="submit" className="hbtn">
                    <p>Post job</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="all-jobs" id="allJobs">
          <div className="bar">
            <p className="secondary-text">
              <span className="primary-text">All</span> available jobs
            </p>
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

export default PostJob;
