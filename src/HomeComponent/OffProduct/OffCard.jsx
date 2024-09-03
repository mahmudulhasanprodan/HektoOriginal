import React from 'react'
import img1 from "../../assets/HomeComponentImages/Offone.png"

const OffCard = ({BtnTitle, title, Image,className}) => {
  return (
    <>
      <div>
        <div className={className}>
          <div className="flex relative">
            <div className="p-5 overflow-hidden">
              <h2 className="font-Josefin font-semibold text-lg text-FtextColor">
                {title ? title : "No Title"}
              </h2>
              <button className="font-Lato font-semibold text-base text-BtnColor underline">
                {BtnTitle ? BtnTitle : "No Title"}
              </button>
            </div>
            <div className="absolute right-8 top-10">
              <picture>
                <img src={Image} alt={Image} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OffCard
