import React from "react";
import "./Popular.scss";

import { Cart, Favorite } from "../index";
import { motion } from "framer-motion";

const Popular = ({ Games, isfor }) => {
  return (
    <>
      {Games.map((game, index) => {
        return (
          game[isfor] && (
            <motion.div
              key={index + game.title}
              whileInView={{ opacity: [0, 1], y: ["10%", "0%"] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="vg__popular"
            >
              <motion.div
                whileHover={{ scale: 1.02, opacity: 0.58, y: "2%" }}
                transition={{
                  duration: 0.5,
                  delayChildren: 0.5,
                  ease: "easeInOut",
                }}
                className="vg__popular-item"
                key={index + game.title}
                style={{
                  backgroundImage: `url(${game.thmubnail})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></motion.div>
              <div className="vg__popular-info">
                <div className="title">
                  <h3>{game.title}</h3>
                  <h3 className={isfor === "isOnSale" ? "isOnSale" : ""}>
                    ${game.price}{" "}
                    <span>{isfor === "isOnSale" && game.salePrice}</span>
                  </h3>
                </div>

                {/* cart and favorite */}
                <div className="icons">
                  <Cart />
                  <Favorite />
                </div>
              </div>
            </motion.div>
          )
        );
      })}
    </>
  );
};

export default Popular;
