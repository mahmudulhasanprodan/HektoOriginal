import React, { useEffect, useState } from 'react'
import TrendingCard from './TrendingCard';
import { useSelector, useDispatch } from 'react-redux'


const TrendingProduct = ({title}) => {

  const[TrendingData,setTrendingData]=useState([]);

  const {value,status}= useSelector((state) => state.Product);


  useEffect(() => {
      if (status.payload === "IDLE") {
        setTrendingData(value.payload.products)
      }
  },[status.payload,value.payload])

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
              {TrendingData?.slice(12,16).map((item) => (
                <div>
                  <TrendingCard
                    title={item.title}
                    Image={item.thumbnail}
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
