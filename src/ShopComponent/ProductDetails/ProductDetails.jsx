import React, { useEffect, useState } from 'react'
import ShopTitle from '../ShopTitle/ShopTitle'
import { useSelector, useDispatch } from 'react-redux'
import { FeatureProductData } from '../../../Redux/Counter/Counter.slice'
import { useParams } from 'react-router-dom'
import ProductDetailsRight from './ProductDetailsRight'
import ProductImage from './ProductImage'
import Descripstion from './Descripstion'


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

//slider Here

console.log(DetailsData);

  return (
    <>
      <div>
        <div>
          <ShopTitle Title={"Product Details"} />
        </div>
        <div className="container">
          <div className="py-10 flex items-center gap-x-10">
            <div className="w-1/2 h-full border-[2px] border-gray-400 rounded-sm shadow-lg">
              <ProductImage ProductDataImage={DetailsData} />
            </div>
            <div>
              <ProductDetailsRight
                title={DetailsData.title}
                Price={`$${
                  Math.round(DetailsData.price) -
                  (Math.round(DetailsData.price) *
                    DetailsData.discountPercentage) /
                    100
                }`}
                Description={DetailsData.description}
                Rating={Math.round(DetailsData.rating)}
                Mprice={`$${DetailsData.price}`}
                Categories={DetailsData.category}
                Brand={DetailsData.brand}
                Tag={DetailsData.tags}
                Warrenty={DetailsData.warrantyInformation}
              />
            </div>
          </div>
          <div className="mt-16">
              <Descripstion />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails
