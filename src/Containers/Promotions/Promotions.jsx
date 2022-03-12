import React from "react";
import "./Promotions.scss";

import Games from "../../Data/GameData";
import { Title } from "../../Components/index";
import { Promotion } from "../../Components/index";

const Promotions = () => {
  return (
    // Promotion ttile -40%
    <div className="content-section">
      <div className="content-container">
        <Title title="Promotions" price="40" />

        {/* Promotion Slider */}
        <div className="vg__promotions">
          <Promotion Games={Games} />
        </div>
      </div>
    </div>
  );
};

export default Promotions;
