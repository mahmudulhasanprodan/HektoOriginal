import React from 'react'
import CatagoriesData from './CatagoriesData'
import { BrandNameData,BrandPriceData,BrandColorData,BrandCategoriesData } from '../../../JsonData/JsonData'



const ShopLeft = ({className}) => {
  return (
    <>
      <div className={className}>
        <div>
          <CatagoriesData
            AllData={BrandNameData ? BrandNameData : []}
            subTitle={"Product Brand"}
            
          />
        </div>
        <div>
          <CatagoriesData
            AllData={BrandColorData ? BrandColorData : []}
            subTitle={"Shop By Color"}
            ColorItem={true}
          />
        </div>
        <div>
          <CatagoriesData
            AllData={BrandPriceData ? BrandPriceData : []}
            subTitle={"Shop By Price"}
          />
        </div>
        <div>
          <CatagoriesData
            AllData={BrandCategoriesData ? BrandCategoriesData : []}
            subTitle={"Shop By Catagori"}
            Rating={true}
          />
        </div>
        
      </div>
    </>
  );
}

export default ShopLeft
