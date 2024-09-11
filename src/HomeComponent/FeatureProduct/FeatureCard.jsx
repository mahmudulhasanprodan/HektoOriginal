import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";




const FeatureCard = ({title,CodeId,Image,Fprice}) => {
  const [hover, sethover] = useState(false);

  const handleMouseEnter = () => {
    sethover(true);
  };

  const handleMouseLeave = () => {
    sethover(false);
  };

  return (
    <>
      <div
        className="py-8 drop-shadow-CardShadow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full md:w-[300px] lg:w-[400px] xl:w-[300px] h-[250px] bg-CardColor mt-12 shadow-md cursor-pointer rounded-t-lg flex items-center justify-center">
          <div>
            {hover && (
              <div className="absolute flex items-center gap-x-3 left-5 top-3 font-bold text-xl">
                <FaShoppingCart className="w-4 h-4 text-HeaderTopColor" />
                <FaRegHeart className="w-4 h-4 text-blue-500" />
                <MdOutlineZoomIn className="w-5 h-5 text-blue-500 pt-[1px]" />
              </div>
            )}

            <picture>
              <img src={Image} alt={Image} />
            </picture>
          </div>
        </div>

        <div
          className={`group relative w-[300px] lg:w-[400px] xl:w-[300px] h-[130px] rounded-b-lg bg-CommonColor flex flex-col items-center justify-center cursor-pointer ${
            hover && "bg-HoverColor"
          }`}
        >
          <div className="absolute mb-44">
            {hover && (
              <button className="px-8 py-2 bg-SecondBtnColor rounded-sm text-xs font-Josefin text-CommonColor">
                View Details
              </button>
            )}
          </div>
          <h2
            className={`font-Lato font-bold text-lg text-BtnColor ${
              hover && "text-CommonColor"
            }`}
          >
            {title ? title : "Title Missing"}
          </h2>
          <div className="flex items-center gap-x-3 mt-2">
            <div className="w-6 h-1 bg-[#05E6B7] rounded-full"></div>
            <div className="w-6 h-1 bg-BtnColor rounded-full"></div>
            <div
              className={`w-6 h-1 bg-HoverColor rounded-full ${
                hover && "group-[]:bg-CommonColor"
              }`}
            ></div>
          </div>
          <h3
            className={`font-Josefin text-sm text-HoverColor mt-2 ${
              hover && "group-[]:text-CommonColor"
            }`}
          >
            {CodeId ? CodeId : "Code - Y523201"}
          </h3>
          <p
            className={`font-Lato text-sm text-HoverColor mt-2 ${
              hover && "group-[]:text-CommonColor"
            }`}
          >
            {Fprice ? Fprice : "$44.00"}
          </p>
        </div>
      </div>
    </>
  );
}

export default FeatureCard
