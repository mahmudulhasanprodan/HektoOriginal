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
          <ShopLeft className="w-[25%] py-10" />
          <ShopRight className="w-[75%] border-2 border-gray-300" />
        </div>
      </div>
    </>
  );






}

export default Shop
