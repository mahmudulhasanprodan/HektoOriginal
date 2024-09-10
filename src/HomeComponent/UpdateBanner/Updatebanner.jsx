import React from 'react'
import UpdateBanner from "../../assets/HomeComponentImages/UpdateBanner.png"
import SponsoredLogo from "../../assets/HomeComponentImages/SponsoredLogo.png"

const Updatebanner = () => {
  return (
    <>
      <div className="py-20 hidden md:block">
        <div>
          <div className="relative">
            <div>
            <picture>
              <img src={UpdateBanner} alt={UpdateBanner} />
            </picture>
            </div>
            <div className="container">
              <div className="flex flex-col items-center absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2">
                <h2 className="font-Josefin font-bold text-FtextColor md:text-3xl text-center">
                  Get Leatest Update By Subscribe <br /> 0ur Newslater
                </h2>
                <button className="py-2 px-8 bg-BtnColor text-CommonColor mt-6 rounded-sm">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-10">
            <picture>
              <img src={SponsoredLogo} alt={SponsoredLogo} />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Updatebanner



