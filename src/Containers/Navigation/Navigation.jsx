/*
 * filknaa waxa uu masuu noga yahy in uu isku keen keeno dhamaan
 * componetga quseya navigation
 * halkaan baan ku render greneynaa
 */

import { useState, useEffect } from "react";
import { MenuIsOpen } from "../../Context/menu-context";
import { SubMenuOpen } from "../../Context/subMenu-context";
import {
  Brand,
  DesktopLinks,
  Button,
  SearchInput,
  Languages,
  User,
  Favorite,
  Cart,
  Search,
  MobileMenu,
  MenuIcon,
  Submenus,
} from "../../Components/index";
import "./Navigation.scss";

const Navigation = () => {
  // satate masuul ka ah mobile menu
  const [isopened, setIsOpened] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  // bodyga overfogisa qari hadii uu menuga furan yahye
  useEffect(() => {
    document.body.classList.toggle("overflow", isopened);
  }, [isopened]);

  // halknaa ina wax ka badasho uma baahnid
  return (
    <>
      <section className="section vg__navbg">
        <div className="vg__nav container">
          {/* Brand-Logo */}
          <Brand />

          {/*linkiyada menuga  */}
          <SubMenuOpen.Provider value={{ isSubOpen, setIsSubOpen }}>
            <DesktopLinks />
          </SubMenuOpen.Provider>

          {/* buttonka free game */}
          <Button type="button" className="vg__navbutton" text="free Games" />

          {/*barta wax raadinta */}
          <SearchInput
            className="vg__search"
            type="text"
            placeholder="Search Here"
          />

          <div className="vg__cta">
            {/* luqadha */}
            <Languages />

            {/* Raadi Iconka */}
            <Search />

            {/*userka */}
            <User />

            {/* albta u jecladay */}
            <Favorite />

            {/* alaabta uu dambisha ku rity */}
            <Cart />

            {/* Mnenu Icon */}
            <MenuIsOpen.Provider value={{ isopened, setIsOpened }}>
              <MenuIcon />
            </MenuIsOpen.Provider>
          </div>
        </div>
      </section>

      {/* Sub Menus */}
      <SubMenuOpen.Provider value={{ isSubOpen, setIsSubOpen }}>
        <section className="section ">
          <Submenus />
        </section>
      </SubMenuOpen.Provider>

      {/* Mbile Menu */}
      <MenuIsOpen.Provider value={{ isopened, setIsOpened }}>
        <MobileMenu />
      </MenuIsOpen.Provider>
    </>
  );
};

export default Navigation;
