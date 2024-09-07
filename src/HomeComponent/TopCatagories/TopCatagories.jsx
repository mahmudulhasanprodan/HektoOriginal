import React from 'react'
import TopCatagoriesCard from './TopCatagoriesCard'
import { CatagriesData } from '../../../JsonData/JsonData'
import Flex from '../../CommonComponent/Flex/Flex'

const TopCatagories = ({title}) => {
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
            <Flex className={"items-center justify-between mt-10"}>
              {CatagriesData?.map((item) => (
                <TopCatagoriesCard
                  title={item.title}
                  Price={item.price}
                  Image={item.img}
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
