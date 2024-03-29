import React, { useState, useEffect } from "react";
import Logo from "../assets/Icons/Layer_1.svg";
import BurgerMenuClose from "../assets/Icons/closeMain.svg";
import BurgerMenuOpen from "../assets/Icons/openMain.svg";
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const closeNavbar = () => {
      setMenu(false);
      document.body.style.overflowY = "";
    };

    if (menu) {
      document.addEventListener("click", closeNavbar);
      document.body.style.overflowY = "hidden"; 
    } else {
      document.removeEventListener("click", closeNavbar);
      document.body.style.overflowY = ""; 
    }

    return () => {
      document.removeEventListener("click", closeNavbar);
      document.body.style.overflowY = "";
    };
  }, [menu]);

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setMenu(!menu);
  };

  const handleLinkClick = () => {
    setMenu(false); // Close the menu when a link is clicked
  };

  return (
    <div className=" bg-whiteColor">
      <div className="  flex mt-[19px] md:mt-[25px] ">
        <div className="Nav flex fixed left-0 z-50 mx-6  right-0 justify-between  items-center   h-[60px]  px-12 ">
          <div className="logo ">
            <Link to='/'>
              <img src={Logo} alt="asas" />
            </Link>
          </div>
          <div
            className="menuBar  cursor-pointer "
            onClick={toggleMenu}
          >
            {menu ? (
              <img src={BurgerMenuOpen} alt="Burgermenu" />
            ) : (
              <img src={BurgerMenuClose} alt="Burgermenu" />
            )}
          </div> 
        </div>
        <div
          className="repsonsiveMenu  fixed left-0 right-0 flex items-center
           justify-center pb-[10px] md:py-[10px] px-12 mx-[50px]   "
          style={{
            top: menu ? "78px" : "-500px",
            transition: "top 0.3s ease",
          }}
          onClick={(e) => e.stopPropagation()} 
        >
          <ul className="  flex flex-col gap-2  items-center  font-pop font-normal transition-all duration-500 ease-in mt-5">
            <li onClick={handleLinkClick}>
              <a className="cursor-pointer text-whiteColor " target="_blank" href='https://wa.me/994553091509' onClick={handleLinkClick}>Sifariş et</a>
            </li>
            <li onClick={handleLinkClick}>
              <Link className="cursor-pointer text-whiteColor" to="1"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this value according to your layout
                duration={500}
                onClick={handleLinkClick}>Əlaqə</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};
 
export default Header;

