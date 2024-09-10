import React from 'react'
import { Link } from 'react-router-dom';
import DiscountImage from "../../assets/HomeComponentImages/DiscountItem.png"
import Flex from '../../CommonComponent/Flex/Flex';
import { IoMdCheckmark } from "react-icons/io";

const DiscountPart = ({title}) => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div>
            <div className="mt-24">
              <h2 className="font-Lato text-3xl text-FtextColor font-bold tracking-wider text-center pb-10 md:pb-0">
                {title ? title : "Title Missing"}
              </h2>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-x-14 mt-4">
                <Link
                  to={"/"}
                  className="font-Lato text-lg text-BtnColor  hover:underline"
                >
                  Wood Chair
                </Link>
                <Link
                  to={"/"}
                  className="font-Lato text-lg hover:text-BtnColor hover:underline"
                >
                  Sofa Chair
                </Link>
                <Link
                  to={"/"}
                  className="font-Lato text-lg hover:text-BtnColor hover:underline"
                >
                  Featured
                </Link>
              </div>
            </div>
          </div>
          <Flex className={"items-center justify-between"}>
            <div className="w-full px-4 md:px-0 md:w-1/2">
              <div>
                <h2 className="font-Josefin font-bold text-xl md:text-3xl text-FtextColor text-center md:text-start">
                  20% Discount Of All Products
                </h2>
                <h3 className="font-Josefin font-bold text-sm text-BtnColor text-center md:text-start mt-2">
                  Eams Sofa Compact
                </h3>
                <p className="font-Lato font-normal text-sm text-OpacityColor text-justify md:text-start md:w-[500px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget feugiat habitasse nec, bibendum condimentum.
                </p>
                <div className="flex flex-col md:gap-y-3 mt-6">
                  <div className="flex flex-col md:flex-row md:items-center grow shrink gap-x-4">
                    <div className="flex items-center gap-x-2">
                      <IoMdCheckmark className="font-Lato font-normal text-sm text-OpacityColor" />
                      <h3 className="font-Lato font-normal text-sm text-OpacityColor">
                        Material expose like metals
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <IoMdCheckmark className="font-Lato font-normal text-sm text-OpacityColor" />
                      <h3 className="font-Lato font-normal text-sm text-OpacityColor">
                        Clear lines and geomatric figures
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center shrink grow  gap-x-10">
                    <div className="flex items-center gap-x-2">
                      <IoMdCheckmark className="font-Lato font-normal text-sm text-OpacityColor" />
                      <h3 className="font-Lato font-normal text-sm text-OpacityColor">
                        Simple neutral colours.
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <IoMdCheckmark className="font-Lato font-normal text-sm text-OpacityColor" />
                      <h3 className="font-Lato font-normal text-sm text-OpacityColor">
                        Material expose like metals
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-8">
                <button className="w-full md:w-1/3  py-2 bg-BtnColor text-CommonColor font-Josefin">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="w-1/2 hidden md:block">
              <div className="relative z-10">
                <picture>
                  <img src={DiscountImage} alt={DiscountImage} />
                </picture>
                <div className="w-[450px] h-[450px] bg-[#FCECF1] rounded-full absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 -z-10"></div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default DiscountPart
