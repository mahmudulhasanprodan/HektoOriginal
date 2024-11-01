import React, { useEffect, useState } from 'react'
import ShopTop from '../ShopTop/ShopTop'
import ShopRightBottom from './ShopRightBottom'
import { useSelector, useDispatch } from 'react-redux'
import { FeatureProductData } from '../../../Redux/Counter/Counter.slice'
import Loading from '../../CommonComponent/Loading/Loading'
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom'


const ShopRight = ({className}) => {
  const dispatch = useDispatch();
  const [shopData, setshopData] = useState([]);
  const [Page, setPage] = useState(1);

  useEffect(() => {
    dispatch(FeatureProductData("https://dummyjson.com/products"));
  }, []);


  const { value, status } = useSelector((state) => state.Product);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setshopData(value.payload.products);
    }
  }, [status.payload, value.payload]);

  // Handlepagination function start here

  const Handlepagination = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.floor(shopData.length/9) + 1) {
      setPage(pageNumber);
    }
  };

 
  
  return (
    <>
      <div className={className}>
        <div>
          <ShopTop />
        </div>
        <div>
          <div className="px-4">
            {status.payload === "LOADING" ? (
              <Loading className={"min-w-[300px] lg:w-[900px] xl:w-full h-[230px] rounded-md px-4 mt-4"} />
            ) : status.payload === "ERROR" ? (
              <h2>Error</h2>
            ) : (
              shopData?.slice(Page * 9 - 9, Page * 9).map((item) => (
                <div key={item.id}>
                  <Link to={`/product-details/${item.id}`}>
                    <ShopRightBottom
                      shopImage={item.thumbnail}
                      title={item.title}
                    />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="py-10 px-4 flex items-center gap-x-3">
          <p
            className="w-10 h-10 bg-green-200 flex justify-center text-black items-center cursor-pointer"
            onClick={() => Handlepagination(Page - 1)}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </p>
          {[
            ...new Array(
              Math.floor(shopData.length / 9) <= shopData.length / 9
                ? Math.floor(shopData.length / 9) + 1
                : shopData.length / 9
            ),
          ].map((_, index) => (
            <div key={index}>
              <p
                className={`w-10 h-10 flex items-center justify-center cursor-pointer text-CommonColor ${
                  index + 1 === Page ? "bg-blue-400" : "bg-black"
                }`}
                onClick={() => Handlepagination(index + 1)}
              >
                {index + 1}
              </p>
            </div>
          ))}
          <p
            className="w-10 h-10 bg-green-200 flex justify-center text-black items-center cursor-pointer"
            onClick={() => Handlepagination(Page + 1)}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </p>
        </div>
      </div>
    </>
  );
}

export default ShopRight
