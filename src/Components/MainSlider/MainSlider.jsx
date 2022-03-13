import React, { useState } from "react";
import Games from "../../Data/GameData";
import { motion } from "framer-motion";
import { Button } from "../index";
const MainSlider = () => {
  // waxay contorlysaa data  kaso muqanysa sliderka weyn
  const [sliders, setSliders] = useState(Games[0]);
  // animationkana waxa iskaleh minislider
  const varients = {
    hidden: { scale: 1.05, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  //TODO: Remove the inline style and change it to actual imge element

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
          <div className="content-container flex">
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
            game !== sliders &&
            game.isForSlider && (
              <motion.div
                key={index + game.title}
                variants={varients}
                initial="hidden"
                whileHover={{ y: "-2%", opacity: 0.7 }}
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
