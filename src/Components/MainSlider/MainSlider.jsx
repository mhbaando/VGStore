import React, { useState } from "react";
import Games from "../../Data/GameData";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../index";
const MainSlider = () => {
  // waxay contorlysaa data  kaso muqanysa sliderka weyn
  const [sliders, setSliders] = useState(Games[0]);

  // animationka waxaan iskaleeh main sliderka
  const mainSlider = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  // animationkana waxa iskaleh minislider
  const varients = {
    hidden: { scale: 1.05, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  // halkna ina waxa kabadsho uma baahnid
  return (
    <>
      <motion.div
        className="vg__mainslider"
        style={{
          backgroundImage: `url(${sliders.thmubnail})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* waxa uu dhaxda nooga hynaa xogtena markaan shaashad weyn ku furtid */}

        <div className="content-section">
          <div className="content-container">
            {/* xogta halkaan bay ka bilaabanysaaa */}
            <motion.h3>
              {sliders.title} <span>- ${sliders.price}</span>
            </motion.h3>
            <motion.p>{sliders.desc}</motion.p>
            <Button
              className="gradient-color"
              type="button"
              text="Add To Cart"
            />
            {/* xogta halkaan bay ka dhamaaneysaa */}
          </div>
        </div>
      </motion.div>

      {/* sliderka yarka oo kamuuqada qeybta hoose  */}

      <motion.div className="minSlider">
        {Games.map((game, index) => {
          return (
            game !== sliders && (
              <motion.div
                key={index + game.title}
                variants={varients}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => setSliders(game)}
              >
                <img src={game.thmubnail} alt={game.title} />
                <h3>{game.title}</h3>
              </motion.div>
            )
          );
        })}
      </motion.div>
    </>
  );
};

export default MainSlider;