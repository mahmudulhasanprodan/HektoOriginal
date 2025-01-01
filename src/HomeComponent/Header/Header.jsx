import React, { useEffect, useRef, useState } from 'react'
import Flex from '../../CommonComponent/Flex/Flex';
import { FaPhoneVolume } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { Link, } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { Gettotal } from '../../../Redux/AddtoCart/AddtoCartSlice';



const Header = () => {
  const dispatch =useDispatch();

 const HeaderRef = useRef();
 const CartRef = useRef();
 
 useEffect(() => {
  window.addEventListener('click', (e) => {
   if(!HeaderRef.current.contains(e.target)){
    setShowCart(false);
   } 
   if(CartRef.current.contains(e.target)){
    setShowCart(true);
   }
  }) 
 },[])
 
  const[ShowCart,setShowCart] = useState(false);

  const HandleCart = () => {
    setShowCart(!ShowCart);
  };
const{TotalAmount, TotalCartItem, CartItem}=useSelector((state) => state.Cart);




   




  return (
    <>
      <div className="bg-HeaderTopColor hidden md:block" ref={HeaderRef}>
        <div className="container">
          <Flex className={"items-center justify-between py-2 px-4 xl:px-0"}>
            <div className="flex items-center gap-x-20">
              <div className="hidden lg:block">
                <div className="flex items-center text-CommonColor gap-x-3 cursor-pointer">
                  <span className="font-bold">
                    <GrMailOption className="w-[16px] h-[16px]" />
                  </span>
                  <h2 className="text-CommonColor font-Josefin text-sm font-semibold">
                    mahmudulhasan8627@gmail.com
                  </h2>
                </div>
              </div>
              <div className="flex items-center text-CommonColor gap-x-3 cursor-pointer">
                <span>
                  <FaPhoneVolume className="w-[16px] h-[16px]" />
                </span>
                <h2 className="text-CommonColor font-Josefin text-sm font-semibold">
                  (12345)67890
                </h2>
              </div>
            </div>
            {/* Right item list  */}
            <div className="flex items-center gap-x-6">
              <div className="hidden md:block">
                <div className="flex items-center text-CommonColor cursor-pointer gap-x-2">
                  <p className="text-CommonColor font-Josefin text-sm font-semibold">
                    English
                  </p>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center text-CommonColor cursor-pointer gap-x-2">
                  <p className="text-CommonColor font-Josefin text-sm font-semibold">
                    USD
                  </p>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-CommonColor cursor-pointer gap-x-2">
                  <Link to={"/account"}>
                    <p className="text-CommonColor font-Josefin text-sm font-semibold active:text-green-400">
                      Login
                    </p>
                  </Link>
                  <Link to={"/account"}>
                    <span>
                      <FaRegUser className="w-[14px] h-[14px] active:text-green-400" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center text-CommonColor cursor-pointer gap-x-2">
                  <p className="text-CommonColor font-Josefin text-sm font-semibold">
                    Wishlist
                  </p>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
              </div>
              <div
                className="text-CommonColor cursor-pointer hidden lg:block "
                onClick={HandleCart}
              >
                <span
                  className={`${
                    ShowCart ? "text-green-400 font-bold" : "font-bold"
                  }`}
                >
                  <FaCartPlus />
                </span>
                <div className="absolute top-1 right-10">
                  <div className="w-6 h-6 rounded-full bg-CommonColor">
                    <p className="text-red-500 font-bold text-sm flex items-center justify-center h-full">{TotalCartItem}</p>
                  </div>
                </div>
              </div>
              <div ref={CartRef}>
                {ShowCart && (
                  <div className="absolute top-9 right-8 z-10">
                    <div className="bg-FooterBtmColor h-[400px] w-[300px] py-2 px-2 relative overflow-y-scroll">
                      {CartItem?.map((item) => (
                        <div
                          className="flex items-center gap-x-3 mt-2 bg-blue-200 py-2 cursor-pointer px-1"
                          key={item.id}
                        >
                          <div className="bg-CommonColor border-2 border-blue-200 w-30 h-20">
                            <img
                              src={item.thumbnail}
                              alt={item.thumbnail}
                              className="w-30 h-20"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h2 className="text-base font-Lato">
                              {item.title
                                ? `${item.title.slice(0, 15)}...`
                                : "No Title"}
                            </h2>
                            <span className="font-Lato text-sm">
                              ${item.price}
                            </span>
                            <div className="absolute right-6">
                              <p className="cursor-pointer font-bold text-red-500">
                                X
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center justify-between bg-CommonColor h-24 px-2 shadow-md">
                        <div>
                          <button className="px-3 py-2 bg-green-400 rounded-md">
                            View Details
                          </button>
                        </div>
                        <div>
                          <button className="px-10 py-2 bg-blue-400 rounded-md">
                            Procceed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Right item list */}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Header
