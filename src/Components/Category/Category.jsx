import React from "react";
import CategoryData from "../../Data/Catagory";
import { motion } from "framer-motion";

const Category = () => {
  return (
    <section className="content-section">
      <div className="content-container">
        <div className="vg__category">
          <div className="vg__category-title">
            <div></div>
            <h3>Categories</h3>
          </div>

          <div className="vg__categoryItems">
            {CategoryData.map((item, index) => {
              return (
                <motion.div
                  initial={{ scale: 1, opacity: 1, y: "0%" }}
                  whileHover={{ scale: 1.02, opacity: 0.58, y: "2%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  key={item + index}
                  style={{
                    backgroundImage: `url(${item.imgURL})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h3>{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
