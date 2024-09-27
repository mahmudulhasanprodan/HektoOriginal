import React from 'react'
import ShopLeft from '../../ShopComponent/ShopLeft/ShopLeft'
import ShopRight from '../../ShopComponent/ShopRight/ShopRight'
import ShopTitle from '../../ShopComponent/ShopTitle/ShopTitle'


const Shop = () => {
  return (
    <>
      <div>
        <ShopTitle />
      </div>
      <div className="container">
        <div className="flex">
          <ShopLeft className="w-[20%] mt-20" />
          <ShopRight className="w-[85%] border-2 border-gray-300 mt-20" />
        </div>
      </div>
    </>
  );






}

export default Shop
