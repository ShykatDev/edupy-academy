import React from "react";
import { working } from "../../assets";

const Construction = ({ darkTheme }) => {
  return (
    <div id="constructions" className={darkTheme ? "dark" : "light"}>
      <div className="content">
        <div className="navback sec-background"></div>
        <div className="details">
          <h2>ডেভেলপার এটি নিয়ে কাজ করছে ...</h2>
          <img src={working} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Construction;
