import React, { useState } from 'react'
import Img1 from "../../assets/HomeComponentImages/TrendingOne.png"
import Flex from "../../CommonComponent/Flex/Flex"

const TopCatagoriesCard = ({title, Price}) => {

  const[Hover,setHover]= useState(false);

  // HandleMouseEnter function start here 

  const HandleMouseEnter = () => {
      setHover(true);
  };

  // HandleMouseLeave function start here 

  const HandleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className="py-10">
        <div className="container">
          <Flex className={"items-center justify-between"}>
            <div>
              <div
                className="w-[270px] h-[270px] bg-CardColor rounded-full shadow-md cursor-pointer relative"
                onMouseEnter={HandleMouseEnter}
                onMouseLeave={HandleMouseLeave}
              >
                <div className="relative">
                  <picture>
                    <img
                      src={Img1}
                      alt={Img1}
                      className="rounded-full flex items-center justify-center"
                    />
                  </picture>
                  {Hover && (
                    <div className="absolute left-16 bottom-1">
                      <button className="py-1 px-6 bg-SecondBtnColor rounded-sm text-CommonColor font-Josefin">
                        View Shop
                      </button>
                    </div>
                  )}
                </div>
                <div className="absolute -left-1 top-0 -z-10">
                  <div
                    className={`${
                      Hover &&
                      "w-[270px] h-[270px] bg-HeaderTopColor absolute top-2 left-1  rounded-full"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="w-[270px] flex flex-col items-center mt-6">
                <h2 className="font-Josefin font-semibold text-lg text-FtextColor">
                 {title ? title : "No Title"}
                </h2>
                <span className="font-Josefin font-semibold text-base text-FtextColor">
                  {Price ? Price : "$33.00"}
                </span>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default TopCatagoriesCard
