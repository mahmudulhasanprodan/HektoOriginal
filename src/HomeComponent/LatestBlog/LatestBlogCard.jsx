import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";


const LatestBlogCard = ({Title,Subtitle,Button,Image}) => {
  return (
    <>
      <div className="w-full md:w-[370px] h-[490px] rounded-md shadow-md mt-10 px-4 md:px-0">
        <div className="w-full h-[265px] flex items-center justify-center cursor-pointer">
          <picture>
            <img src={Image} alt={Image} className="rounded-md" />
          </picture>
        </div>
        <div className="px-3 mt-2">
          <div className="flex items-center gap-x-8 cursor-pointer">
            <div className="flex items-center gap-x-1">
              <span>
                <FaPenNib className="w-3 h-3 text-BtnColor cursor-pointer" />
              </span>
              <h3 className="font-Josefin text-xs text-FtextColor font-semibold">
                SaberAli
              </h3>
            </div>
            <div className="flex items-center gap-x-1">
              <span>
                <MdDateRange className="w-3 h-3 text-[#FFA454] cursor-pointer" />
              </span>
              <h3 className="font-Josefin text-xs text-FtextColor font-semibold">
                21 August,2020
              </h3>
            </div>
          </div>
          <div>
            <h2 className="font-Josefin font-bold text-lg text-FtextColor py-6">
              {Title ? Title : "No Title"}
            </h2>
            <p className="font-Lato text-sm text-OpacityColor text-justify pr-16">
              {Subtitle ? Subtitle : "No Subtitle"}
            </p>
          </div>
          <div className="mt-3">
            {Button === true ? (
              <button className="font-Lato text-sm underline text-FtextColor hover:text-BtnColor cursor-pointer">
                Read More
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestBlogCard
