import React from 'react'
import FooterTopitem from './FooterTopitem'
import Flex from '../../../CommonComponent/Flex/Flex';

const FooterTop = () => {
  return (
    <>
      <div className="bg-FooterColor py-20 px-4">
        <div className="container">
          <Flex className={"justify-between pr-16 px-4 md:px-0"}>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-6">
                <h2 className="font-bold font-Josefin text-3xl text-LogoColor">
                  Hekto
                </h2>
                <div>
                  <input
                    type="text"
                    id="footersearch"
                    name="footersearch"
                    placeholder="Enter Email Address"
                    className="w-40 sm:w-48 md:w-56 pl-3 py-2"
                  />
                  <button className="py-2 px-2  md:px-6 bg-BtnColor rounded-tr-md rounded-br-md text-CommonColor font-Josefin">
                    Sign Up
                  </button>
                </div>
                <div>
                  <h2 className="font-Josefin text-OpacityColor font-normal text-sm">
                    Contact Info
                  </h2>
                  <p className="font-Josefin text-OpacityColor font-normal text-sm">
                    17 Princess Road, London, Greater London NW1 8JR, UK
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Flex className={"gap-x-20"}>
                <div className="hidden lg:block">
                  <FooterTopitem
                    Title={"Catagories"}
                    AllItem={[
                      "Laptops & Computers",
                      "Cameras & Photography",
                      "Smart Phones & Tablets",
                      "Video Games & Consoles",
                      "Waterproof Headphones",
                    ]}
                  />
                </div>
                <div className="hidden lg:block">
                  <FooterTopitem
                    Title={"Customer Care"}
                    AllItem={[
                      "My Account",
                      "Discount",
                      "Returns",
                      "Order History",
                      "Order Tracking",
                    ]}
                  />
                </div>
                <div className="hidden lg:block">
                  <FooterTopitem
                    Title={"Pages"}
                    AllItem={[
                      "Blog",
                      "Browse the Shop",
                      "Category",
                      "Pre-Built Pages",
                      "Visual Composer Elements",
                      "WooCommerce Pages",
                    ]}
                  />
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default FooterTop
