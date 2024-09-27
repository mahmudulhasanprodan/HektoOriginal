import React, { useEffect, useState } from 'react'
import LastestCard from './LastestCard'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../CommonComponent/Loading/Loading';



const LatestProduct = ({title}) => {

  const[LatestData,setLatestData]=useState([]);

  const {value,status}=useSelector((state) => state.Product);

  console.log(value.payload);


  useEffect(() => {
      if (status.payload === "IDLE") {
        setLatestData(value.payload.products)
      }
  },[status.payload,value.payload])



  return (
    <>
      <div>
        <div className="container">
          <div className="px-4 md:px-0">
            <div className="mt-24">
              <h2 className="font-Lato text-3xl text-FtextColor font-bold tracking-wider text-center">
                {title ? title : "Title Missing"}
              </h2>
            </div>
            <div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-14 mt-4 px-4 md:px-0">
                <Link
                  to={"/"}
                  className="font-Lato text-lg text-BtnColor hover:underline"
                >
                  New Arrival
                </Link>
                <Link
                  to={"/"}
                  className="font-Lato text-lg hover:text-BtnColor hover:underline"
                >
                  Best Seller
                </Link>
                <Link
                  to={"/"}
                  className="font-Lato text-lg hover:text-BtnColor hover:underline"
                >
                  Featured
                </Link>
                <Link
                  to={"/"}
                  className="font-Lato text-lg hover:text-BtnColor hover:underline"
                >
                  Special Offer
                </Link>
              </div>
            </div>
          </div>
          {/* loading State  */}
          <div className="flex items-center gap-x-4">
              {status.payload === "LOADING" && (
                <Loading
                  className={
                    "w-full md:w-[300px] lg:w-[400px] xl:w-[300px] h-[380px] rounded-md mt-12"
                  }
                />
              )}
            </div>
          <div className="py-10 flex items-center justify-center lg:gap-x-10 xl:justify-between md:gap-x-6 flex-wrap gap-y-24 px-4 md:px-0">
            {LatestData?.slice(6,12).map((item) => (
              <LastestCard
                title={item.title}
                Price={item.Mprise - (item.Mprise * item.discountPrice) / 100}
                MainPrice={item.Mprise}
                DiscoutPrice={
                  item.baze === true ? `-${item.discountPrice}%` : item.Product
                }
                Image={item.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProduct
