import React from "react";
import "./HomeBlog.scss";
import { News } from "../../Components/index";
import { NewsData } from "../../Data/index";
const HomeBlog = () => {
  return (
    <div className="content-section">
      <div className="content-container">
        <News newsData={NewsData} />
      </div>
    </div>
  );
};

export default HomeBlog;
