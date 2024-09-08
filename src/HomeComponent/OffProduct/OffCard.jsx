import React from 'react'

const OffCard = ({BtnTitle, title, Image,className}) => {
  return (
    <>
      <div>
        <div className={className}>
          <div className="flex relative h-24">
            <div className="p-5 overflow-hidden h-24">
              <h2 className="font-Josefin font-semibold text-lg text-FtextColor">
                {title ? title : "No Title"}
              </h2>
              <button className="font-Lato font-semibold text-base text-BtnColor underline">
                {BtnTitle ? BtnTitle : "No Title"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end h-48 pr-4">
            <picture>
              <img src={Image} alt={Image} />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default OffCard
