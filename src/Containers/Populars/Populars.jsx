import React from "react";
import { Popular, Title } from "../../Components/index";
import "./Populars.scss";

const Populars = () => {
  return (
    // popular title
    <>
      <div className="content-section">
        <div className="content-container">
          <Title title="Populars" />
        </div>
      </div>

      {/* Popular Slider */}
      <div className="vg__populars">
        <Popular />
      </div>
    </>
  );
};

export default Populars;
