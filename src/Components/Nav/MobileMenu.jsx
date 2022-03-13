/*
 * filknaa waxa uu masuu noga yahy in uu noo hayo menuska dhanka bdx kaso baxay
 * markaan mobile version joogno
 * kaa rbanna waan ka ragi karnaaa
 */

import { useContext, useState } from "react";
import { MenuIsOpen } from "../../Context/menu-context";
import { MenuItems } from "../../Data/index";
import { SubMenuItems } from "../../Data/index";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  // waa context api masul ka ah in uu soo saro ama qariyo menuga
  const { isopened, setIsOpened } = useContext(MenuIsOpen);
  const [subMenu, SetSubMenu] = useState(false);

  // waa setting uu leyahy motion framer oo menuga kore
  const variants = {
    hidden: { x: "-30%", opacity: 0 },
    show: { x: "0%", opacity: 1, visibility: "visible" },
  };

  // waa setting uu leyahy motion framer oo menuga kore
  const container = {
    hidden: { x: "-30%", opacity: 0 },
    show: {
      x: "0%",
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // waa setting uu leyahy motion framer oo menuga kore
  const item = {
    hidden: { visibility: "hidden" },
    show: { visibility: "visible" },
  };

  // for submenu
  const subvariants = {
    hidden: { visibility: "hidden", opacity: 0 },
    show: {
      visibility: "visible",
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };
  // for submenu
  const subitem = {
    hidden: { visibility: "hidden" },
    show: { visibility: "visible" },
  };
  // halkaan hoose ina wax ka badasho uma baahndi
  // wxii style ahna waxa kbadali kartaa src/container/navigation/navugation.scss

  return (
    <>
      {/* overlay div waa div ta no hysa backgroudka cad ee menu g marku so baxo lascto */}
      <AnimatePresence>
        {isopened && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="overlay overlay-bg"
            onClick={() => setIsOpened(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* menu List */}
        {isopened && (
          <motion.div
            variants={container}
            initial="hidden"
            animate={`${isopened ? "show" : "hidden"}`}
            exit="hidden"
            className="vg__mobilemenu"
          >
            {/* Menu ga Kore */}
            <ul>
              {MenuItems.map((menuItem, index) => {
                return (
                  <motion.li
                    variants={item}
                    key={index}
                    onClick={() => {
                      // in uu xirmo menuga marbno marka kan kowad lagu dhfto
                      index !== 0 && setIsOpened(false);
                      // waxaan soo bixninyaa sub menuga hoose hduu qarsanyhy hadi klana wa qarinynaa
                      index == 0 && SetSubMenu(!subMenu);
                    }}
                  >
                    <a href={menuItem.src}>{menuItem.name}</a>
                    {/* Menuga Hoose */}
                    <AnimatePresence>
                      {subMenu && index == 0 && (
                        <motion.ul
                          variants={subvariants}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                        >
                          {SubMenuItems.map((SubMenuItem, index) => {
                            return (
                              <motion.li
                                variants={subitem}
                                key={index}
                                onClick={() => setIsOpened(false)}
                              >
                                <a href={SubMenuItem.src}>{SubMenuItem.name}</a>
                              </motion.li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                    {/*  meuga hoose halkaan buu ku egayhy */}
                  </motion.li>
                  // menuga weynka ahna halkaan buu ku egyahy
                );
              })}
            </ul>

            {/* Menu Buuton */}
            <motion.button
              className="vg__navmobilebutton"
              type="button"
              variants={item}
              onClick={() => setIsOpened(false)}
            >
              Fre Games
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
