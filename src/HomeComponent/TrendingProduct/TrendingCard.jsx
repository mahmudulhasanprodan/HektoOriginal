import React from 'react'


const TrendingCard = ({title,Image,MainPrice,Price}) => {
  return (
    <div className="py-10">
      <div className="w-[300px] md:w-[550px] lg:w-[400px] xl:w-[300px]  h-[370px] bg-CommonColor shadow-md">
        <div className="w-[245px] md:w-[500px] lg:w-[245px]  h-[244px] bg-CardColor m-auto mt-3 md:flex md:justify-center lg:justify-start lg:flex-none">
          <picture>
            <img src={Image} alt={Image} />
          </picture>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <h2 className="font-Lato font-bold text-base text-FtextColor">{title ? title : "No Title"}</h2>
          <div className="flex items-center gap-x-5 mt-2">
            <p className="font-Lato text-FtextColor text-sm font-bold">{Price ? Price : "$26"}</p>
            <h3 className="font-Lato text-OpacityColor text-sm">
              <del>{MainPrice ? MainPrice : "$50"}</del>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard
