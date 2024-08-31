import React, { useState } from 'react'
import img1 from "../../assets/HomeComponentImages/image1.png"
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md"

const LastestCard = ({title,Price,MainPrice,DiscoutPrice,Image}) => {

const[LatestHover,setLatestHover]=useState(false);

// HandleMouseEnter start here 
const HandleMouseEnter = () => {
    setLatestHover(true);
};

// HandleMouseleave start here 
const HandleMouseleave = () => {
    setLatestHover(false);   
};

  return (
    <div>
      <div
        className="w-[360px] h-[305px] shadow-md cursor-pointer"
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseleave}
      >
        <div className="relative h-[270px] bg-CardColor flex items-center justify-center">
          <div className="absolute top-5 left-5">
            <button className="px-4 py-1 bg-blue-600 rounded-sm font-Lato text-CommonColor font-semibold">
              {DiscoutPrice ? DiscoutPrice : "-$20.00"}
            </button>
          </div>
          <div className="absolute left-5 bottom-5 flex flex-col items-center gap-y-3">
            <FaShoppingCart className="w-4 h-4 text-HeaderTopColor" />
            <FaRegHeart className="w-4 h-4 text-blue-500" />
            <MdOutlineZoomIn className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <picture>
              <img src={Image} alt={Image} />
            </picture>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 h-[35px] bg-CommonColor">
          <h2 className="font-Josefin font-semibold text-FtextColor text-base">
            {title ? title : "No title"}
          </h2>
          <div className="flex items-center gap-x-5">
            <p className="font-Josefin font-semibold text-FtextColor text-sm">
              {Price ?  `$${Price}` : ""}
            </p>
            <span className="font-Josefin font-semibold text-[#FB2448] text-sm">
              <del>{MainPrice ? `$${MainPrice}` : "$65.00"}</del>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastestCard
