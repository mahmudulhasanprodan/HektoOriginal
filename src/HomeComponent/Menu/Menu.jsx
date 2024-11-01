import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Button from '../../CommonComponent/Button/Button';
import Flex from '../../CommonComponent/Flex/Flex';
import { FaBars } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaPagelines } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaUser } from "react-icons/fa";





const Menu = () => {

  const[showMenu,setshowMenu] = useState(false)

// HandleshowMenu function start here

const HandleshowMenu = () => {
  setshowMenu(!showMenu);
};

// HandleCancelMenu start here

const HandleCancelMenu = () => {
  setshowMenu(!showMenu);
}

  return (
    <>
      <div className="bg-BannerBg shadow-md md:shadow-none md:bg-CommonColor fixed md:static w-full z-10 md:z-0">
        <div className="container">
          <Flex
            className={"items-center justify-between py-2 md:py-4 px-4 xl:px-0"}
          >
            <div className="flex items-center gap-x-20">
              <div>
                <h2 className="font-bold font-Josefin text-3xl text-LogoColor cursor-pointer">
                  Hekto
                </h2>
              </div>

              {/* Menu list here */}
              <div className="">
                <div
                  className={`absolute md:static flex flex-col md:flex-row items-center gap-x-24 ${
                    showMenu
                      ? "right-0 top-0 bg-slate-200 h-[100vh] md:h-0 transition-all ease-in-out delay-150 "
                      : "top-0 transition-all h-[100vh] md:h-0 ease-in-out delay-150  right-[-100%]"
                  }`}
                >
                  <div className="flex items-center justify-between bg-slate-400 w-56 px-6 md:hidden">
                    <h2 className="font-Josefin py-3 text-CommonColor text-base font-bold">
                      Menu
                    </h2>

                    <span
                      className="cursor-pointer text-CommonColor active:text-red-500"
                      onClick={HandleCancelMenu}
                    >
                      X
                    </span>
                  </div>
                  <NavLink
                    to={"/"}
                    className={
                      "text-base flex items-center gap-x-4 font-Lato w-56 md:w-0 py-3 md:py-0 md:hover:bg-none hover:bg-gray-300 border-b-[1px] border-b-gray-300 md:border-b-0 md:border-b-gray-0 focus:bg-gray-300"
                    }
                  >
                    <span className="pl-5 md:hidden">
                      <IoMdHome />
                    </span>
                    <h3>Home</h3>
                  </NavLink>
                  <NavLink
                    to={"/"}
                    className={
                      "text-base flex items-center gap-x-4 font-Lato w-56 md:w-0 py-3 md:py-0 md:hover:bg-none hover:bg-gray-300 border-b-[1px] border-b-gray-300 md:border-b-0 md:border-b-gray-0 focus:bg-gray-300"
                    }
                  >
                    <span className="pl-5 md:hidden">
                      <FaPagelines />
                    </span>
                    <h3>Pages</h3>
                  </NavLink>
                  <NavLink
                    to={"/"}
                    className={
                      "text-base flex items-center gap-x-4 font-Lato w-56 md:w-0 py-3 md:py-0 md:hover:bg-none hover:bg-gray-300 border-b-[1px] border-b-gray-300 md:border-b-0 md:border-b-gray-0 focus:bg-gray-300"
                    }
                  >
                    <span className="pl-5 md:hidden">
                      <FaProductHunt />
                    </span>
                    <h3>Products</h3>
                  </NavLink>
                  <NavLink
                    to={"/"}
                    className={
                      "text-base flex items-center gap-x-4 font-Lato w-56 md:w-0 py-3 md:py-0 md:hover:bg-none hover:bg-gray-300 border-b-[1px] border-b-gray-300 md:border-b-0 md:border-b-gray-0 focus:bg-gray-300"
                    }
                  >
                    <span className="pl-5 md:hidden">
                      <FaBlogger />
                    </span>
                    <h3>Blog</h3>
                  </NavLink>
                  <NavLink
                    to={"/shop"}
                    className={
                      "text-base flex items-center gap-x-4 font-Lato w-56 md:w-0 py-3 md:py-0 md:hover:bg-none hover:bg-gray-300 border-b-[1px] border-b-gray-300 md:border-b-0 md:border-b-gray-0 focus:bg-gray-300"
                    }
                  >
                    <span className="pl-5 md:hidden">
                      <FaShopify />
                    </span>
                    <h3>Shop</h3>
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className={
                      "text-base flex items-center gap-x-4 font-Lato w-56 md:w-0 py-3 md:py-0 md:hover:bg-none hover:bg-gray-300 border-b-[1px] border-b-gray-300 md:border-b-0 md:border-b-gray-0 focus:bg-gray-300"
                    }
                  >
                    <span className="pl-5 md:hidden">
                      <IoMdContacts />
                    </span>
                    <h3>Contact</h3>
                  </NavLink>
                  <NavLink
                    to={"/account"}
                    className={
                      "text-base flex items-center gap-x-4 font-Lato w-56 md:w-0 py-3 md:py-0 md:hover:bg-none hover:bg-gray-300 border-b-[1px] border-b-gray-300 md:border-b-0 md:border-b-gray-0 md:hidden focus:bg-gray-300"
                    }
                  >
                    <span className="pl-5 md:hidden">
                      <FaUser />
                    </span>
                    <h3>Login</h3>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center">
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="You search here"
                  className="w-[280px] lg:w-[250px] xl:w-[280px] border-2 border-BtnColor h-10 pl-3"
                />
                <Button
                  className={
                    "h-10 px-8 bg-BtnColor text-CommonColor font-Josefin font-bold"
                  }
                  title={"Search"}
                />
              </div>
            </div>
            <div
              className="cursor-pointer md:hidden active:text-green-400"
              onClick={HandleshowMenu}
            >
              <span>
                <FaBars />
              </span>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Menu
