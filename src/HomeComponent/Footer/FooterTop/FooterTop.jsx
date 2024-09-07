import React from 'react'
import FooterTopitem from './FooterTopitem'
import Flex from '../../../CommonComponent/Flex/Flex';

const FooterTop = () => {
  return (
    <>
      <div className="bg-FooterColor py-20">
        <div className="container">
          <Flex className={"justify-between"}>
            <div className="flex flex-colgap-y-4">
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
                    className="w-56 pl-3 py-2"
                  />
                  <button className="py-2 px-6 bg-BtnColor rounded-tr-md rounded-br-md text-CommonColor font-Josefin">
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
            <Flex className={"gap-x-20"}>
              <div>
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
              <div>
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
              <div>
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
          </Flex>
        </div>
      </div>
    </>
  );
}

export default FooterTop
