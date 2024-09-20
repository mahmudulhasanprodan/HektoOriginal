import React from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { DropDownData } from '../../../JsonData/JsonData';
console.log(DropDownData);


const ShopTop = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center">
            <h2>View:</h2>
            <FaBars />
            <AiOutlineBars />
          </div>
          <div className="flex items-center">
            <h2>Sort by:</h2>
            <select name="shortItem" id="shortItem">
              {DropDownData?.map((item) => (
                <option
                  value="Feature"
                  key={item.id}
                  className="rounded-none"
                >
                  {item.Product}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopTop
