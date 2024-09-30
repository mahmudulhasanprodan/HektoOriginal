import React, { useEffect, useState } from 'react'
import ShopTitle from '../ShopTitle/ShopTitle'
import { useSelector, useDispatch } from 'react-redux'
import { FeatureProductData } from '../../../Redux/Counter/Counter.slice'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
const dispatch = useDispatch();
const {productId} = useParams();



const[DetailsData,setDetailsData] = useState([]);

useEffect(() => {
  dispatch(FeatureProductData(`https://dummyjson.com/products/${productId}`));
}, []);


const{value,status}=useSelector((state) => state.Product);


useEffect(() => {
      if(status.payload === "IDLE" ){
        setDetailsData(value.payload);
      }
},[status.payload,value.payload])



  return (
    <>
      <div>
        <div>
          <ShopTitle />
        </div>
        <div className="container">
          <div className="py-10">
            <div className="flex w-[1170px] h-[510px] bg-CommonColor drop-shadow-CardShadow">
              <h2>{status.payload}.....</h2>
              <div className="flex gap-x-3 w-1/2 h-full">
                {DetailsData.images?.map((img) => (
                  <div className="flex flex-col gap-y-3 p-3">
                    <img src={img} alt={img} />
                  </div>
                ))}           
              </div>
              <div className="w-1/2 h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails
