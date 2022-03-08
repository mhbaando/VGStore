/*
 * Filkan waxa uu ino haya desktop linkska
 * waxana kaso aqrineynaa linkyada menuitems oo common no ah
 * kasoo ka dhaxeya mobile menu iyo deskto menu
 */
import { useContext } from "react";
import MenuItems from "./MenuItems.js";
import { SubMenuOpen } from "../../Context/subMenu-context";

const DesktopLinks = () => {
  const { isSubOpen, setIsSubOpen } = useContext(SubMenuOpen);
  return (
    <div className="vg__Dlinks">
      {/* Menus halkan ayay ka bilowdaan */}
      <ul>
        {MenuItems.map((MenuItem, index) => {
          return (
            <li
              key={index}
              onClick={() => index == 0 && setIsSubOpen(!isSubOpen)}
              className="active"
            >
              <a href={MenuItem.src}>{MenuItem.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopLinks;

// <li key={index}>
// <a href={MenuItem.src}>{MenuItem.name}</a>
// </li>
