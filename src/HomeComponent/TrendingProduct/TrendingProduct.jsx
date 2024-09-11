import React from 'react'
import TrendingCard from './TrendingCard';
import { TrendingData } from '../../../JsonData/JsonData';


const TrendingProduct = ({title}) => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="mt-24">
              <h2 className="font-Lato text-3xl text-FtextColor font-bold tracking-wider text-center">
                {title ? title : "No Title"}
              </h2>
            </div>
            <div className="flex items-center flex-wrap xl:flex-nowrap justify-center sm:gap-x-5 md:gap-x-0 lg:gap-x-6 xl:gap-x-0 xl:justify-between cursor-pointer">
              {TrendingData?.map((item) => (
                <div>
                  <TrendingCard
                    title={item.title}
                    Image={item.img}
                    Price={`$${
                      item.price - (item.price * item.discount) / 100
                    }`}
                    MainPrice={`$${item.price}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingProduct
