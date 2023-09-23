import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  animated,
  logo_design,
  wordpress,
  illustration,
  social,
  data_entry,
  shorts,
  cinematic,
  infographic,
  mainLogoVideo,
} from "../../assets";
import PopularServicesCard from "./PopularServicesCard";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import Pagination from "../UI/Pagination";
import QuesAns from "./QuesAns";

const SingleAnimatedCategory = ({ darkTheme }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const jobsPerPage = 20;
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
    <div id="singleCategory" className={!darkTheme ? "dark" : "light"}>
      <main className="background">
        <div className="topContent">
          <div className="details">
            <img src={mainLogoVideo} alt="" className="titleLogo" />
            <h1 className="primary-text">Video Editor</h1>
            <p className="secondary-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              inventore, distinctio architecto tenetur aut cupiditate!
            </p>
            <div className="services">
              <div className="item background">
                <img src={shorts} alt="" />
                <p className="secondary-text">Shorts Video Editing</p>
              </div>
              <div className="item background">
                <img src={cinematic} alt="" />
                <p className="secondary-text">Cinematic Video Editing</p>
              </div>
              <div className="item background">
                <img src={infographic} alt="" />
                <p className="secondary-text">Infographic Video Editing</p>
              </div>
            </div>
          </div>

          <ul className="count">
            <li className="secondary-text">
              <div className="ball"></div>
              <p>
                Total Talents: <span className="textGradient">30</span>
              </p>
            </li>
            <li className="secondary-text">
              <div className="ball sball"></div>
              <p>
                Active Talents on this job:
                <span className="textGradient"> 10</span>
              </p>
            </li>
          </ul>
        </div>

        <div className="line"></div>

        <div className="postedJobs">
          <div className="bar">
            <p className="secondary-text">
              <span className="primary-text">100</span> services available
            </p>

            <p className="postLine secondary-text">
              Are you a client?{" "}
              <Link to="/post-job" className="postJob primary-text">
                Post job here
              </Link>
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

        <div className="line"></div>

        <div className="commonFAQs">
          <h2 className="primary-text">
            Frequently Asked <span className="textGradient">Questions</span>
          </h2>
          <p className="secondary-text subTitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
            incidunt!
          </p>

          <div className="faqs">
            <QuesAns active={true} />
            <QuesAns active={false}/>
            <QuesAns active={false}/>
            <QuesAns active={false}/>
          </div>
        </div>

        <div className="otherCategories">
          <div className="title">
            <h2 className="primary-text">
              Other <span className="textGradient">Services</span>
            </h2>

            <Link
              to="/marketplace/categories"
              className="allCategory primary-text"
            >
              View All
            </Link>
          </div>

          <Slider {...settings}>
            <div>
              <PopularServicesCard
                banner={animated}
                title="Video Editor"
                subTitle="Engage your audience"
                link="/marketplace/animated"
              />
            </div>
            <div>
              <PopularServicesCard
                banner={logo_design}
                title="Logo Design"
                subTitle="Build your brand"
                link="/marketplace/logo-design"
              />
            </div>
            <div>
              <PopularServicesCard
                banner={wordpress}
                title="Web Development"
                subTitle="Customize your site"
                link="/marketplace/web-development"
              />
            </div>
            <div>
              <PopularServicesCard
                banner={illustration}
                title="Illustration"
                subTitle="Color your dreams"
                link="/marketplace/illustration"
              />
            </div>
            <div>
              <PopularServicesCard
                banner={social}
                title="Social Media"
                subTitle="Reach more customer"
                link="/marketplace/social"
              />
            </div>
            <div>
              <PopularServicesCard
                banner={data_entry}
                title="Data Entry"
                subTitle="Learn your business"
                link="/marketplace/data-entry"
              />
            </div>
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default SingleAnimatedCategory;
