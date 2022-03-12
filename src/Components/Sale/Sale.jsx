import React from "react";
import { Title, Popular } from "../index";
import Games from "../../Data/GameData";

const Sale = () => {
  return (
    <div className="content-section">
      <div className="content-container">
        {/* Tiitle */}
        <Title title="Sale" />

        {/* On Sale Items */}
        <div className="vg__sale">
          <Popular Games={Games} isfor="isOnSale" />
        </div>
      </div>
    </div>
  );
};

export default Sale;
