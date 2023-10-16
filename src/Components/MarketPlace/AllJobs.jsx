import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Pagination from "../UI/Pagination";

const AllJobs = ({ darkTheme }) => {
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
    <div id="allJobs" className={!darkTheme ? "dark" : "light"}>
      <main>
        <div className="categories">
            
        </div>
        {/* <div className="jobs">
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
        </div> */}
      </main>
    </div>
  );
};

export default AllJobs;
