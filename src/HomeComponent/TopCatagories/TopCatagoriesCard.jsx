import React, { useState } from 'react'
import Img1 from "../../assets/HomeComponentImages/TrendingOne.png"
import Flex from "../../CommonComponent/Flex/Flex"

const TopCatagoriesCard = ({title, Price,Image}) => {

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
                className="w-[270px] h-[270px] lg:w-[350px] lg:h-[350px] xl:w-[270px] xl:h-[270px] bg-CardColor rounded-full shadow-md cursor-pointer relative"
                onMouseEnter={HandleMouseEnter}
                onMouseLeave={HandleMouseLeave}
              >
                <div className="relative flex items-center justify-center top-6">
                  <picture>
                    <img
                      src={Image}
                      alt={Image}
                      className="rounded-full w-[247px] h-[211px]"
                    />
                  </picture>
                </div>
                {Hover && (
                  <div className="absolute left-16 bottom-8">
                    <button className="py-1 px-6 bg-SecondBtnColor rounded-sm text-CommonColor font-Josefin">
                      View Shop
                    </button>
                  </div>
                )}
                <div className="absolute -left-1 top-0 -z-10">
                  <div
                    className={`${
                      Hover &&
                      "w-[270px] h-[270px] lg:w-[350px] lg:h-[350px] xl:w-[270px] xl:h-[270px] bg-HeaderTopColor absolute top-2 -left-1  rounded-full"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="w-[270px] flex flex-col items-center mt-6">
                <h2 className="font-Josefin font-semibold text-lg text-FtextColor">
                  {title ? title : "No Title"}
                </h2>
                <span className="font-Josefin font-normal text-base text-FtextColor">
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
