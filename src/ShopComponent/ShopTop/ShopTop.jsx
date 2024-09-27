import React from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { DropDownData,ShowPageData} from '../../../JsonData/JsonData';
import Flex from "../../CommonComponent/Flex/Flex"



const ShopTop = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center justify-between mt-3 px-5">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <h2 className="font-Lato text-FtextColor">View:</h2>
              <FaBars />
              <AiOutlineBars className="font-bold text-xl"/>
            </div>
            <div className="flex items-center gap-x-6">
              <Flex className={"items-center"}>
                <h2 className="font-Lato text-FtextColor">Sort by:</h2>
                <select name="shortItem" id="shortItem" className="border-2 border-gray-400 cursor-pointer">
                  {DropDownData?.map((item) => (
                    <option
                      value="Feature"
                      key={item.id}
                      className="appearance-none border-none"
                    >
                      {item.Product}
                    </option>
                  ))}
                </select>
              </Flex>
              <Flex className={"items-center"}>
                <h2 className="font-Lato text-FtextColor">Sort by:</h2>
                <select name="shortNumber" id="shortNumber" className="border-2 border-gray-400 cursor-pointer w-24 text-center">
                  {ShowPageData?.map((item) => (
                    <option value="20" key={item.id} className="rounded-none">
                      {item.Product}
                    </option>
                  ))}
                </select>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopTop
