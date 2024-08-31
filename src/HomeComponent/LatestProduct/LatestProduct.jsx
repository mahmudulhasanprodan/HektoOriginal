import React from 'react'
import LastestCard from './LastestCard'
import { Link } from 'react-router-dom';
import { LatestData } from '../../../JsonData/JsonData';



const LatestProduct = ({title}) => {
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
            <div className="flex items-center justify-center gap-x-14 mt-4">
              <Link
                to={"/"}
                className="font-Lato text-lg hover:text-BtnColor hover:underline"
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
          <div className="py-10 flex items-center gap-x-10 justify-center flex-wrap gap-y-24">
            {LatestData?.map((item) => (
              <LastestCard
                title={item.title}
                Price={item.Mprise-((item.Mprise * item.discountPrice) / 100)}
                MainPrice={item.Mprise}
                DiscoutPrice={
                  item.baze === true ? `-${item.discountPrice}%` : item.Product
                }
                Image={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProduct
