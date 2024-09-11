import React from 'react'
import FeatureCategori from './FeatureCard'
import { FeatureData } from '../../../JsonData/JsonData';
console.log(FeatureData);


const FeatureProduct = ({title}) => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="mt-24">
              <h2 className="font-Lato text-3xl text-FtextColor font-bold tracking-wider text-center">
                {title ? title : "Title Missing"}
              </h2>
            </div>
            <div className="flex flex-wrap xl:flex-nowrap lg:gap-x-10 xl:gap-x-0 items-center justify-center gap-x-4 xl:justify-between px-4 sm:px-0 lg:px-4 xl:px-0">
              {FeatureData?.map((item) => (
                <div>
                  <FeatureCategori
                    title={item.title}
                    CodeId={item.code}
                    Fprice={item.Price}
                    Image={item.img}
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

export default FeatureProduct
