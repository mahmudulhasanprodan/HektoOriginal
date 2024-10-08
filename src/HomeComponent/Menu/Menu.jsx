import React from 'react'
import { NavLink } from "react-router-dom";
import Button from '../../CommonComponent/Button/Button';
import Flex from '../../CommonComponent/Flex/Flex';
import { FaBars } from "react-icons/fa6";



const Menu = () => {
  return (
    <>
      <div className="bg-BannerBg shadow-md md:shadow-none md:bg-CommonColor fixed md:static w-full z-10 md:z-0">
        <div className="container">
          <Flex className={"items-center justify-between py-2 md:py-4 px-4 xl:px-0"}>
            <div className="flex items-center gap-x-20">
              <div>
                <h2 className="font-bold font-Josefin text-3xl text-LogoColor cursor-pointer">
                  Hekto
                </h2>
              </div>
              {/* <div className="cursor-pointer">
                <span><FaBars /></span>
              </div> */}

             { /* Menu list here */}
              <div className="hidden md:block">
                <div className="flex items-center gap-x-8">
                  <NavLink to={"/"} className={"text-base font-Lato"}>
                    Home
                  </NavLink>
                  <NavLink to={"/"} className={"text-base font-Lato"}>
                    Pages
                  </NavLink>
                  <NavLink to={"/"} className={"text-base font-Lato"}>
                    Products
                  </NavLink>
                  <NavLink to={"/"} className={"text-base font-Lato"}>
                    Blog
                  </NavLink>
                  <NavLink to={"/shop"} className={"text-base font-Lato active:underline focus:text-red-400"}>
                    Shop
                  </NavLink>
                  <NavLink to={"/contact"} className={"text-base font-Lato focus:text-red-400"}>
                    Contact
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
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Menu
