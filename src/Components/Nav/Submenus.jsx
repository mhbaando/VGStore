/*
 * filknaa waxa uu noo render graynaa submensuaka iyo logic gooda
 * Kuwaas oo ku hoos jira Menu Element
 */
import React, { useContext } from "react";
import SubMenuItems from "./SubMenuItems";
import { SubMenuOpen } from "../../Context/subMenu-context";
import { motion, AnimatePresence } from "framer-motion";

const Submenus = () => {
  // context aan ku mamlyno in menuga in uu uranthy iyo inkle
  const { isSubOpen, setIsSubOpen } = useContext(SubMenuOpen);
  // waa setting uu leyahy motion kaso kor iyo hoos u dhaqaajinaya sub menuga
  const variants = {
    hidden: { y: "-100%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { visibility: "hidden" },
    show: { visibility: "visible" },
  };

  // halknaan inaa wax kabadashid uma baahnid
  return (
    <>
      <AnimatePresence>
        {isSubOpen && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="container vg__submenus bg-submenu"
          >
            <motion.ul>
              {SubMenuItems.map((submenuItem, index) => {
                return (
                  <motion.li
                    variants={item}
                    key={index}
                    onClick={() => setIsSubOpen(false)}
                  >
                    <a href={submenuItem.src}>{submenuItem.name}</a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Submenus;
