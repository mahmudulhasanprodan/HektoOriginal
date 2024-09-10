import React from 'react'
import OffCard from './OffCard'
import { OffData,offsideData } from '../../../JsonData/JsonData';


const OffProduct = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="flex justify-between flex-wrap md:flex-nowrap gap-y-4">
            {OffData?.map((item) => (
              <div key={item.id}>
                <OffCard
                  className={`w-[350px] md:w-[500px] h-72  ${
                    item.bacground === true ? "bg-[#FFF6FB]" : "bg-[#EEEFFB]"
                  }`}
                  title={item.title}
                  color={item.Color === true ? "#FFF6FB" : "#0000"}
                  BtnTitle={item.BtnName}
                  Image={item.img}
                />
              </div>
            ))}
            {/*side part off product*/}

            <div className="flex flex-col justify-between cursor-pointer">
              {offsideData?.map((item) => (
                <div className="hidden md:block">
                  <div className="flex items-center gap-x-5">
                    <div className="w-24 h-16 bg-[#F5F6F8] flex items-center justify-center p-4">
                      <picture>
                        <img src={item.img} alt={item.img} />
                      </picture>
                    </div>
                    <div>
                      <h2 className="font-Lato text-xs font-bold text-FtextColor">
                        {item.title ? item.title : "Title Missing"}
                      </h2>
                      <span className="font-Lato text-xs font-bold text-FtextColor">
                        {item.price ? item.price : "$32.00"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OffProduct
