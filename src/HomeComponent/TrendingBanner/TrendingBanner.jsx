import React from 'react'
import Trendingimg from "../../assets/HomeComponentImages/TrendingImg.png"
import Flex from "../../CommonComponent/Flex/Flex"

const TrendingBanner = () => {
  return (
    <>
      <div className="bg-BannerBg my-10">
        <div className="container">
          <Flex className={"items-center justify-between md:py-6 lg:py-0"}>
            <div className="1/2 hidden md:block">
              <picture>
                <img src={Trendingimg} alt={Trendingimg} />
              </picture>
            </div>

            <div className="w-full lg:w-1/2 px-4 lg:px-0">
              <h2 className="font-Josefin font-bold text-lg md:text-3xl text-FtextColor text-center md:text-start mt-4 md:mt-0 md:w-[420px]">Unique Features Of leatest & Trending Poducts</h2>
              <div className="flex items-center gap-x-2 w-full md:w-[460px] mt-7 sm:pl-32 md:pl-0">
                <h3 className="w-3 h-3 bg-BtnColor rounded-full"></h3>
                <p className="font-Lato md:text-sm text-OpacityColor text-xs">
                  All frames constructed with hardwood solids and laminates
                </p>
              </div>
              <div className="flex items-center gap-x-2 w-full md:w-[460px] mt-4 sm:pl-32 md:pl-0">
                <h3 className="w-3 h-3 bg-HoverColor rounded-full"></h3>
                <p className="font-Lato md:text-sm text-OpacityColor text-xs">
                  Reinforced with double wood dowels, glue, screw - nails corner<br />
                  blocks and machine nails
                </p>
              </div>
              <div className="flex items-center gap-x-2 w-full md:w-[460px] mt-4 sm:pl-32 md:pl-0">
                <h3 className="w-3 h-3 bg-SecondBtnColor rounded-full"></h3>
                <p className="font-Lato md:text-sm text-OpacityColor text-xs">
                  Arms, backs and seats are structurally reinforced
                </p>
              </div>
              <div className="flex items-center gap-x-4 mb-4 md:mb-0 w-full md:w-[460px] mt-6 justify-center md:justify-start">
                <button className="px-8 py-2 bg-BtnColor text-CommonColor rounded-sm">
                  Add To Cart
                </button>
                <div className="hidden md:block"> 
                  <h1 className="font-Josefin font-semibold text-sm text-FtextColor">B&B Italian Sofa</h1>
                  <p className="font-Lato text-sm text-FtextColor">$32.00</p>
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default TrendingBanner
