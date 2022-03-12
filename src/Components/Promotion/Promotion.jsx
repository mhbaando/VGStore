import React from "react";
import { motion } from "framer-motion";

const Promotion = ({ Games }) => {
  return (
    <>
      {Games.map((game, index) => {
        return (
          // waxaa soo celisaa kaliya gameska oo disountga lagu smeyay
          game.isDiscounted && (
            <motion.div
              key={index + game.title}
              whileInView={{ opacity: [0, 1], y: ["10%", "0%"] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="vg__promotions-item"
            >
              <motion.img
                whileHover={{ scale: 1.02, opacity: 0.58, y: "2%" }}
                transition={{
                  duration: 0.5,
                  delayChildren: 0.5,
                  ease: "easeInOut",
                }}
                src={game.thmubnail}
                alt={game.title}
              />
            </motion.div>
          )
        );
      })}
    </>
  );
};

export default Promotion;
