import React, { useEffect, useState } from 'react'
import ShopTop from '../ShopTop/ShopTop'
import ShopRightBottom from './ShopRightBottom'
import { useSelector, useDispatch } from 'react-redux'
import { FeatureProductData } from '../../../Redux/Counter/Counter.slice'
import Loading from '../../CommonComponent/Loading/Loading'


const ShopRight = ({className}) => {
  const dispatch = useDispatch();
  const [shopData,setshopData]= useState([]);

  useEffect(() => {
    dispatch(FeatureProductData());
  },[])

  const{value,status}=useSelector((state) => state.Product);
  
useEffect(() => {
    if(status.payload === "IDLE"){
      setshopData(value.payload.products);
    }
},[status.payload,value.payload]);







  return (
    <>
      <div className={className}>
        <div>
          <ShopTop />
        </div>
        <div>
          <div className="px-4">
            {status.payload === "LOADING" && (
              <Loading className={"w-full h-[230px] rounded-md px-4 mt-4"} />
            )}
          </div>
          {shopData?.slice(0,9).map((item) => (
            <div>
              <ShopRightBottom shopImage={item.thumbnail} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopRight
