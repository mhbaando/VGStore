import React from "react";
import { PageTitle } from "../../Components/index";
import "./AboutHeader.scss";
const AboutHeader = () => {
  return (
    <div className="about__header-bg ">
      <div className="content-section ">
        <div className="content-container">
          <div className="vg__about-header">
            <PageTitle
              pageTitle="About VG Store"
              paths={[
                { name: "Home", src: "/" },
                { name: "About", src: "/about" },
              ]}
            />
            <div className="vg__about-info">
              <h1>vg store </h1>
              <p>your Video Game Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
