import React from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb';



const ShopTitle = ({Title}) => {
  return (
    <>
      <div className="bg-BannerBg">
        <div className="container">
          <div className="py-20 px-4 xl:px-0">
            <div>
              <h2 className="font-Josefin font-bold text-3xl">{Title ? Title : "No Title"}</h2>
            </div>
            <div className="mt-2">
              <BreadCrumb />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopTitle
