import React from "react";
import "./Populars.scss";
import Games from "../../Data/GameData";
import { Popular, Title } from "../../Components/index";

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
        <Popular Games={Games} />
      </div>
    </>
  );
};

export default Populars;
