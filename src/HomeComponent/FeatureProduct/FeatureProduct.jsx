import React, { useEffect, useState } from 'react'
import FeatureCategori from './FeatureCard'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../CommonComponent/Loading/Loading';
import { FeatureProductData } from '../../../Redux/Counter/Counter.slice';




const FeatureProduct = ({title,Pdata}) => {

const dispatch = useDispatch();

const[allProducts,setallProducts]=useState(Pdata)


const{status,value}= useSelector((state) => state.Product);

useEffect(() => {
  if(status.payload === "IDLE"){
    setallProducts(Pdata);
  }
},[status.payload,value.payload])

 

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
            <div className="flex items-center gap-x-4">
              {status.payload === "LOADING" && (
                <Loading
                  className={
                    "w-full md:w-[300px] lg:w-[400px] xl:w-[300px] h-[380px] rounded-md mt-12"
                  }
                />
              )}
            </div>
            <div className="flex flex-wrap xl:flex-nowrap lg:gap-x-10 xl:gap-x-0 items-center justify-center gap-x-4 xl:justify-between px-4 sm:px-0 lg:px-4 xl:px-0">
              {allProducts?.slice(0, 4).map((item) => (
                <div key={item.id}>
                  <FeatureCategori
                    title={item.title}
                    CodeId={item.code}
                    Fprice={item.Price}
                    Image={item.thumbnail}
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
