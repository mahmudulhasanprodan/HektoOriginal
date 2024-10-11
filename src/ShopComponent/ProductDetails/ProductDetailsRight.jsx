import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


const ProductDetailsRight = ({title,Rating,Price,Mprice,Categories,Brand,Tag,Warrenty,Description}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="font-Josefin font-bold text-2xl text-FtextColor">
        {title ? title : "No title"}
      </h2>
      <div className="flex items-center gap-x-2">
        {Rating <= 2 ? (
          <h3 className="flex items-center gap-x-2 text-yellow-400 font-bold">
            <FaRegStar />
            <FaRegStar />
          </h3>
        ) : Rating <= 3 ? (
          <h3 className="flex items-center gap-x-2 text-yellow-400 font-bold">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </h3>
        ) : Rating <= 4 ? (
          <h3 className="flex items-center gap-x-2 text-yellow-400 font-bold">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </h3>
        ) : Rating <= 5 ? (
          <h3 className="flex items-center gap-x-2 text-yellow-400 font-bold">
            <FaRegStar />
            <FaRegStar />
          </h3>
        ) : (
          <FaRegStar />
        )}
      </div>
      <div className="flex items-center gap-x-10">
        <p className="font-Lato font-normal text-sm text-FtextColor">
          {Price ? Price : "$34.00"}
        </p>
        <span>
          <del className="font-Lato font-normal text-sm text-BtnColor">
            {Mprice ? Mprice : "$44.00"}
          </del>
        </span>
      </div>
      <div>
        <p className="font-Josefin font-normal text-sm text-OpacityColor">
          {Description ? Description : "No description"}
        </p>
      </div>
      <div className="flex items-center gap-x-6 cursor-pointer">
        <button className="px-8 py-1 bg-BtnColor rounded-sm text-CommonColor">
          Add to Cart
        </button>
        <span>
          <FaRegHeart />
        </span>
      </div>
      <div className="flex items-center gap-x-3">
        <p className="font-Josefin text-sm text-FtextColor font-semibold">
          Categories:
        </p>
        <span className="font-Josefin text-sm">
          {Categories ? Categories : "No Title"}
        </span>
      </div>
      <div className="flex items-center gap-x-3">
        <p className="font-Josefin text-sm text-FtextColor font-semibold">
          Brand:
        </p>
        <span className="font-Josefin text-sm">
          {Brand ? Brand : "No Brand"}
        </span>
      </div>
      <div className="flex items-center gap-x-3">
        <p className="font-Josefin text-sm text-FtextColor font-semibold">
          Tag:
        </p>
        <span className="font-Josefin text-sm">
          {Tag ? `${Tag}` : "No Tag"}
        </span>
      </div>
      <div className="flex items-center gap-x-3">
        <p className="font-Josefin text-sm text-FtextColor font-semibold">
          Warrenty:
        </p>
        <span className="font-Josefin text-sm">
          {Warrenty ? Warrenty : "No warrenty"}
        </span>
      </div>
    </div>
  );
}

export default ProductDetailsRight
