import React from 'react'
import Flex from '../../CommonComponent/Flex/Flex';
import { FaPhoneVolume } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <>
      <div className="bg-HeaderTopColor hidden md:block">
        <div className="container">
          <Flex className={"items-center justify-between py-2 px-4 xl:px-0"}>
            <div className="flex items-center gap-x-20">
              <div className="hidden lg:block">
                <div className="flex items-center text-CommonColor gap-x-3 cursor-pointer">
                  <span className="font-bold">
                    <GrMailOption className="w-[16px] h-[16px]" />
                  </span>
                  <h2 className="text-CommonColor font-Josefin text-sm font-semibold">
                    mahmudulhasan8627@gmail.com
                  </h2>
                </div>
              </div>
              <div className="flex items-center text-CommonColor gap-x-3 cursor-pointer">
                <span>
                  <FaPhoneVolume className="w-[16px] h-[16px]" />
                </span>
                <h2 className="text-CommonColor font-Josefin text-sm font-semibold">
                  (12345)67890
                </h2>
              </div>
            </div>
            {/* Right item list  */}
            <div className="flex items-center gap-x-6">
              <div className="hidden md:block">
                <div className="flex items-center text-CommonColor cursor-pointer gap-x-2">
                  <p className="text-CommonColor font-Josefin text-sm font-semibold">
                    English
                  </p>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center text-CommonColor cursor-pointer gap-x-2">
                  <p className="text-CommonColor font-Josefin text-sm font-semibold">
                    USD
                  </p>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-CommonColor cursor-pointer gap-x-2">
                  <Link to={"/account"}>
                    <p className="text-CommonColor font-Josefin text-sm font-semibold active:text-green-400">
                      Login
                    </p>
                  </Link>
                  <Link to={"/account"}>
                    <span>
                      <FaRegUser className="w-[14px] h-[14px] active:text-green-400" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center text-CommonColor cursor-pointer gap-x-2">
                  <p className="text-CommonColor font-Josefin text-sm font-semibold">
                    Wishlist
                  </p>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
              </div>
              <div className="text-CommonColor cursor-pointer hidden lg:block">
                <span className="font-bold">
                  <FaCartPlus />
                </span>
              </div>
            </div>
            {/* Right item list */}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Header
