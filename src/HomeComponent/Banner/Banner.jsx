import React from 'react'
import Flex from '../../CommonComponent/Flex/Flex'
import BannerVector from "../../assets/HomeComponentImages/sofa.png"
import Button from "../../CommonComponent/Button/Button"

const Banner = () => {
  return (
    <>
      <div className="bg-BannerBg">
        <div className="container">
          <Flex className={"py-10 items-center justify-between px-4 xl:px-0"}>
            <div className="w-full lg:w-1/2 pt-14 md:pt-0">
              <h3 className="font-Lato text-xs md:text-base font-bold text-BtnColor">
                Best Furniture For Your Castle....
              </h3>
              <h2 className="font-Josefin font-semibold text-xl md:text-4xl tracking-[4px] leading-[2rem] md:leading-[3rem] mt-3 md:pr-20 lg:pr-0">
                New Furniture Collection Trends in 2024
              </h2>
              <p className="font-Lato text-sm md:text-base font-bold text-[#8A8FB9] w-full md:w-[450px] mt-3 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Button
                className={
                  "py-2 px-8 bg-BtnColor rounded-sm text-base font-semibold text-CommonColor font-Josefin mt-8"
                }
                title={"Shop Now"}
              />
            </div>
            <div className="hidden lg:block">
              <picture>
                <img
                  src={BannerVector}
                  alt={BannerVector}
                  className="w-[500px] h-[480px]"
                />
              </picture>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Banner
