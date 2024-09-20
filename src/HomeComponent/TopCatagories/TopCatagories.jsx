import React, { useEffect, useState } from 'react'
import TopCatagoriesCard from './TopCatagoriesCard'
import { CatagriesData } from '../../../JsonData/JsonData'
import Flex from '../../CommonComponent/Flex/Flex'
import { useSelector } from 'react-redux'

const TopCatagories = ({title}) => {

  const[TopcatagoriData,setTopcatagoriData]=useState([]);

  const {value,status}= useSelector((state) => state.Product);


  useEffect(() => {
      if (status.payload === "IDLE") {
        setTopcatagoriData(value.payload.products)
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
            <Flex className={"items-center flex-wrap xl:flex-nowrap justify-center md:gap-x-10 xl:gap-x-0 xl:justify-between mt-10"}>
              {TopcatagoriData?.slice(17,21).map((item) => (
                <TopCatagoriesCard
                  title={item.title}
                  Price={item.price}
                  Image={item.thumbnail}
                />
              ))}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCatagories
