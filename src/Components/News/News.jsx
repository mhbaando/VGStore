import React from "react";
import { Title } from "../index";
import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";
import images from "../../Constants/images";

const News = ({ newsData }) => {
  return (
    <>
      {/* title */}
      <Title title="News" />

      {/* News Item */}
      <motion.div
        whileInView={{ opacity: [0, 1], y: ["10%", "0%"] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="vg__homeNews"
      >
        {newsData.map((news, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.02, opacity: 0.58, y: "2%" }}
              className="vg__homeNews-item"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              key={index + news.title}
              style={{
                backgroundImage: `url(${news.thumbnail} )`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <motion.div className="info">
                <h3>{news.title}</h3>
                <p>{news.subtitle}</p>
              </motion.div>
              <motion.div className="icon">
                <AiOutlineEye /> <span>{news.views}</span>
                <button type="button">
                  <img src={images.Arrow} alt="Arrow Button" />
                </button>
              </motion.div>
              <div className="vg__homeNews-overlay"></div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default News;
