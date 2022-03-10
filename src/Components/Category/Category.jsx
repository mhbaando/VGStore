import React from "react";
import CategoryData from "../../Data/Catagory";
import { motion } from "framer-motion";
import { Title } from "../index";
const Category = () => {
  return (
    <section className="content-section">
      <div className="content-container">
        <Title title="Categories" />

        <motion.div
          whileInView={{ y: ["10%", "0%"], opacity: [0, 1] }}
          transition={{
            duration: 0.5,
            delayChildren: 0.5,
          }}
          className="vg__categoryItems"
        >
          {CategoryData.map((item, index) => {
            return (
              <motion.div
                initial={{ scale: 1, opacity: 1, y: "0%" }}
                whileHover={{ scale: 1.02, opacity: 0.58, y: "2%" }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Category;
