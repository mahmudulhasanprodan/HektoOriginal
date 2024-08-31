import React from 'react'
import Flex from '../../CommonComponent/Flex/Flex';
import ShopImg from "../../assets/HomeComponentImages/freedelivery.png"
import CashImg from "../../assets/HomeComponentImages/cashback.png"
import SupportImg from "../../assets/HomeComponentImages/support.png"
import premiumtImg from "../../assets/HomeComponentImages/premium.png"

const Shopex = () => {
  return (
    <>
      <div>
        <div className="container">
            <div className="mt-24 mb-14">
                <h2  className="font-Lato text-3xl text-FtextColor font-bold tracking-wider text-center">What Shopex Offer!</h2>
            </div>
          <Flex className={"items-center gap-x-6 py-10 justify-center cursor-pointer"}>
            <div className="w-[270px] h-[320px] bg-CommonColor shadow-md flex flex-col items-center justify-center">
              <picture>
                <img src={ShopImg} alt={ShopImg} className="w-16 h-16"/>
              </picture>
              <h2 className="font-Lato font-bold text-lg text-FtextColor mt-8">
                24/7 Support
              </h2>
              <p className="font-Lato text-base font-bold px-5 text-center text-gray-300 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="w-[270px] h-[320px] bg-CommonColor shadow-md flex flex-col items-center justify-center">
              <picture>
                <img src={CashImg} alt={CashImg} className="w-16 h-16"/>
              </picture>
              <h2 className="font-Lato font-bold text-lg text-FtextColor mt-8">
                24/7 Support
              </h2>
              <p className="font-Lato text-base font-bold px-5 text-center text-gray-300 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="w-[270px] h-[320px] bg-CommonColor shadow-md flex flex-col items-center justify-center">
              <picture>
                <img src={premiumtImg} alt={premiumtImg} className="w-16 h-16"/>
              </picture>
              <h2 className="font-Lato font-bold text-lg text-FtextColor mt-8">
                24/7 Support
              </h2>
              <p className="font-Lato text-base font-bold px-5 text-center text-gray-300 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="w-[270px] h-[320px] bg-CommonColor shadow-md flex flex-col items-center justify-center">
              <picture>
                <img src={SupportImg} alt={SupportImg} className="w-16 h-16"/>
              </picture>
              <h2 className="font-Lato font-bold text-lg text-FtextColor mt-8">
                24/7 Support
              </h2>
              <p className="font-Lato text-base font-bold px-5 text-center text-gray-300 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Shopex
