/*
 * filknaa waxa uu masuu noga yahy in uu noo hayo luqadha
 * si aan hadhow meel walba ugu isticmaali karno
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Languages = () => {
  // liiska luqdaha kaa rbto kabxi kaa rabtana ku soo dar
  const languages = ["EN 🇬🇧", "SO 🇸🇴", "AR 🇸🇦", "PO 🇵🇱", "RU 🇷🇺"];

  const [defaultLanguage, setdefaultLanguage] = useState(languages[0]);
  const [isHidden, SetIsHidden] = useState(true);

  // waa setting uu farmaer motionleyahay
  const container = {
    hidden: { visibility: "hidden" },
    show: {
      visibility: "visible",
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
  const item = {
    hidden: { visibility: "hidden" },
    show: { visibility: "visible" },
  };

  function languageSelected(e) {
    // luqda aan doorno kabxi liiska
    // hubina inaan meel banaan kusoo dhufan
    if (e.target.tagName === "DIV") return;
    setdefaultLanguage(e.target.innerText);
    SetIsHidden(!isHidden);
  }

  // luqadha mesha aan dynamic uga dhignay
  // meshan ina wax kabasho uma baahnid
  return (
    <div className="vg__languages" onClick={languageSelected}>
      <p>{defaultLanguage}</p>
      <AnimatePresence>
        <motion.div
          variants={container}
          initial="hidden"
          animate={`${isHidden ? "hidden" : "show"}`}
          exit="hidden"
          className={`vg__languages-list`}
        >
          {languages.map((language, index) => {
            return (
              language !== defaultLanguage && (
                <motion.p variants={item} key={index}>
                  {language}
                </motion.p>
              )
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Languages;
