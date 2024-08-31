import React from 'react'
import Flex from '../../CommonComponent/Flex/Flex'
import BannerVector from "../../assets/HomeComponentImages/sofa.png"
import Button from "../../CommonComponent/Button/Button"

const Banner = () => {
  return (
    <>
      <div className="bg-BannerBg">
        <div className="container">
          <Flex className={"py-10 items-center justify-between"}>
            <div className="w-1/2">
              <h3 className="font-Lato text-base font-bold text-BtnColor">
                Best Furniture For Your Castle....
              </h3>
              <h2 className="font-Josefin font-semibold text-4xl tracking-[4px] leading-[3rem] mt-3">
                New Furniture Collection Trends in 2024
              </h2>
              <p className="font-Lato text-base font-bold text-[#8A8FB9] w-[450px] mt-3">
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
            <div className="w-1/2">
              <picture>
                <img
                  src={BannerVector}
                  alt={BannerVector}
                  className="w-[600px] h-[580px]"
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
