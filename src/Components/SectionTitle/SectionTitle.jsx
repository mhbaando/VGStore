import React from "react";
import "./SectionTitle.scss";
const Title = ({ title, price }) => {
  // maadama aan u isticmalyno meelo kala dugan meelaha qaar baa leh price tag marka hadu price tag jiro waan so render greynyan haduusan jirna wan ka tagaynaa
  return (
    <div className="vg__title">
      <div></div>
      <h3>
        {title} <span> {price && `- ${price}%`}</span>{" "}
      </h3>
    </div>
  );
};

export default Title;
