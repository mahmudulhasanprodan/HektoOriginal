import { Input } from 'postcss';
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Flex from "../../CommonComponent/Flex/Flex"
import { FaStar } from "react-icons/fa";

const CatagoriesData = ({AllData=[one,Two,Three],subTitle,ColorItem,Rating}) => {
    console.log(AllData);

     const [BrandData, setBrandData] = useState(AllData);
  
     

    // HandleBrandShow function here 

    const HandleBrandShow = () => {
        setBrandData(!BrandData);
    };
    
  return (
    <>
      <div>
        <div
          className="bg-gray-300 py-1 cursor-pointer mt-2 flex items-center justify-between pr-4"
          onClick={HandleBrandShow}
        >
          <h2 className="pl-4 font-Josefin font-bold text-base text-FtextColor">
            {subTitle ? subTitle : "No Title"}
          </h2>
          <span>{BrandData ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>
        {BrandData && (
          <div className="mt-2">
            {AllData?.map((item) => (
              <Flex
                className={"items-center gap-x-2 cursor-pointer py-1 pl-3"}
                key={item.id}
              >
                {ColorItem ? (
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: `${item.Color}` }}
                  ></div>
                ) : (
                  <input
                    type="checkbox"
                    id="Brandcheck"
                    name="Brandcheck"
                    className="h-4 w-4 "
                  />
                )}

                <h2
                  className="font-Lato text-sm text-OpacityColor"
                >
                  {item.title}
                </h2>
              </Flex>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CatagoriesData
