/*
 * filknaa waxa uu masuu noga yahy in uu noo hayo Iconka Menuga
 * markaan ku dhafano waxa uu isku badalaya X marka kalna menu caadi ah
 * si aan hadhow meel walba ugu isticmaali karno
 */

import { useContext } from "react";
import { MenuIsOpen } from "../../Context/menu-context";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MenuIcon = () => {
  // destructure ku samee contextAPI masuul noga ha in aan menuga
  // kala badali karno
  const { isopened, setIsOpened } = useContext(MenuIsOpen);

  // halkaan hoose inaa wax kabasho uma baahnid
  return (
    <div className="vg__menu-icon">
      {/* Menuga caadiga ah Iconkiisa */}
      {!isopened && (
        <div>
          <AiOutlineMenu onClick={() => setIsOpened(true)} />
        </div>
      )}

      {/* Menuga X ah Iconkiisa */}
      {isopened && (
        <div>
          <AiOutlineClose onClick={() => setIsOpened(false)} />
        </div>
      )}
    </div>
  );
};

export default MenuIcon;
