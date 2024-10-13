import React from 'react'
import Image from "../../assets/ShopPageImage/Rectangle32.png"
import Flex from '../../CommonComponent/Flex/Flex';
import { FaRegStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CiZoomIn } from "react-icons/ci";

const ShopRightBottom = ({shopImage,title}) => {
  return (
    <>
      <div className="mt-6 px-6">
        <div className="w-[990px] bg-CommonColor drop-shadow-CardShadow">
          <Flex className={"items-center"}>
            <div className="flex h-full w-1/3 item-center p-4 cursor-pointer">
              <img src={shopImage} alt={shopImage} className="h-[230px]"/>
            </div>
            <div className="w-2/3 h-full">
             <div className="flex items-center gap-x-16 cursor-pointer">
             <h2 className="font-Josefin font-bold text-base text-FtextColor">{title ? title : "No Title"}i</h2>
             <div className="flex items-center gap-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
             </div>
             </div>
              <div className="flex items-center gap-x-5 mt-2 cursor-pointer">
                <h3 className="font-Josefin font-normal text-sm text-FtextColor">$26.00</h3>
                <span>
                  <del className="font-Josefin font-normal text-sm text-BtnColor">$50</del>
                </span>
                <div className="flex items-center gap-x-2">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <div className="mt-2">
                <p className="font-Lato font-normal text-sm text-OpacityColor w-[530px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
              </div>
              <div className="flex items-center gap-x-10 font-bold mt-3 cursor-pointer text-FtextColor">
                <LuShoppingCart />
                <FaRegHeart />
                <CiZoomIn/>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default ShopRightBottom
