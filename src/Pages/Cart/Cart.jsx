import React, { useState } from 'react'
import Flex from "../../CommonComponent/Flex/Flex"
import img from "../../assets/HomeComponentImages/Blog1.png"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ShopTitle from '../../ShopComponent/ShopTitle/ShopTitle';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveItem,RemoveAll,Increment,Decrement} from '../../../Redux/AddtoCart/AddtoCartSlice';




const Cart = () => {
  const dispatch = useDispatch();
  const{CartItem}=  useSelector((state) => state.Cart);

  const [AddItem,setAddItem] = useState([]);



  // HandleRemove function start here 
  const HandleRemove = (item) => {
      dispatch(RemoveItem(item)); 
      setAddItem(item);  
  };

  // HandleRemoveAll function start here
  const HandleRemoveAll = () => {   
    dispatch(RemoveAll(AddItem));
  }

  // HandleIncrement function start here
  const HandleIncrement = (item) => {
        dispatch(Increment(item));
  };

  // HandleDecrement function start here
  const HandleDecrement = (item) => {
    dispatch(Decrement(item));
  };
  
  return (
    <>
      <div>
        <div>
          <ShopTitle Title={"Shopping Cart"} />
        </div>
        <div className="container">
          <Flex className={"w-3/3 py-24"}>
            <div className="w-2/3">
              <div className="w-full">
                <Flex
                  className={
                    "flex items-center justify-between bg-gray-300 py-2 px-2"
                  }
                >
                  <div className="grow basis-2/5 pl-5">
                    <h2 className="font-Josefin font-bold text-base text-FtextColor">
                      Product
                    </h2>
                  </div>
                  <div className="grow basis-1/5 text-center">
                    <h2 className="font-Josefin font-bold text-base text-FtextColor">
                      Price
                    </h2>
                  </div>
                  <div className="grow basis-1/5 text-center">
                    <h2 className="font-Josefin font-bold text-base text-FtextColor">
                      Quantity
                    </h2>
                  </div>
                  <div className="grow basis-1/5 text-center">
                    <h2 className="font-Josefin font-bold text-base text-FtextColor">
                      Total
                    </h2>
                  </div>
                </Flex>
              </div>
              <div className="w-full py-6 h-[500px] overflow-y-scroll relative">
                {CartItem?.map((item) => (
                  <div key={item.id}>
                    <Flex
                      className={"w-full items-center justify-between py-4"}
                    >
                      <div className="flex items-center gap-x-3 cursor-pointer grow basis-2/5 pl-5">
                        <picture className="relative">
                          <span
                            className="absolute -right-1 -top-3 font-bold px-2 active:bg-green-500 bg-green-300 rounded-full"
                            onClick={() => HandleRemove(item)}
                          >
                            X
                          </span>
                          <img
                            src={item.thumbnail}
                            alt={item.thumbnail}
                            className="w-24 h-20 shadow-md"
                          />
                        </picture>
                        <h2 className="font-Josefin text-sm text-FtextColor">
                          {item.title ? item.title : "Title Missing"}
                        </h2>
                      </div>
                      <div className="grow basis-1/5 text-center">
                        <p className="font-Josefin text-sm text-FtextColor">
                          {`$${
                            Math.round(item.price) -
                            Math.round(item.price * item.discountPercentage) /
                              100
                          }`}
                        </p>
                      </div>
                      <div className="flex items-center cursor-pointer grow basis-1/5 text-center">
                        <div className="flex items-center justify-center gap-x-4 border-2 w-20 m-auto">
                          <span className="font-bold text-sm py-1" onClick={() => HandleDecrement(item)}>
                            <FaMinus />
                          </span>
                          <p className="font-Josefin font-semibold text-FtextColor text-sm">
                            {item.cartQuantity}
                          </p>
                          <span className="text-sm py-1" onClick={() => HandleIncrement(item)}>
                            <FaPlus  />
                          </span>
                        </div>
                      </div>
                      <div className="grow basis-1/5 text-center">
                        <p className="font-Josefin text-sm text-FtextColor">
                          {`$${
                            (Math.round(item.price) -
                              Math.round(item.price * item.discountPercentage) /
                                100) *
                            item.cartQuantity
                          }`}
                        </p>
                      </div>
                    </Flex>
                    <hr className="py-2 w-full" />
                  </div>
                ))}
              </div>
              <div className="w-full">
                <button className="px-8 py-2 bg-BtnColor font-Josefin font-bold rounded-sm text-CommonColor absolute left-1/2" onClick={HandleRemoveAll}>Clear All</button>
              </div>
            </div>
            {/* cart right part  */}
            <div className="w-1/3 flex items-center justify-center relative">
              <div className="w-[295px] h-[285px] bg-FooterColor absolute top-0">
                <Flex className={"flex-col gap-y-4 mt-4"}>
                  <div className="flex items-center justify-between px-4">
                    <h2 className="font-Lato font-semibold text-base text-FtextColor">
                      Subtotals:
                    </h2>
                    <span className="font-Lato text-base text-FtextColor">
                      $234.00
                    </span>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between px-4">
                    <h2 className="font-Lato font-semibold text-base text-FtextColor">
                      Totals:
                    </h2>
                    <span className="font-Lato text-base text-FtextColor">
                      $360.00
                    </span>
                  </div>
                  <hr />
                </Flex>
                <div className="px-4 mt-14">
                  <button className="py-2 bg-green-400 w-full text-CommonColor font-Lato font-bold rounded-sm">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
            {/* cart right part  */}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Cart
