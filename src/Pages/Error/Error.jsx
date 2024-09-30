import React from 'react'
import ShopTitle from '../../ShopComponent/ShopTitle/ShopTitle'
import ErrorImage from "../../assets/ErrorImage/ErrorVector.png"
import { Link } from 'react-router-dom'
import CompanyLogo from "../../assets/HomeComponentImages/SponsoredLogo.png"

const Error = () => {
  return (
    <>
      <div>
        <div>
          <ShopTitle Title={"404 Not Found"} />
        </div>
        <div className="container">
          <div className="py-10">
            <div className="flex items-center justify-center">
              <picture>
                <img src={ErrorImage} alt={ErrorImage} />
              </picture>
            </div>
            <div className="flex items-center justify-center">
              <button className="px-10 py-2 bg-BtnColor rounded-sm text-CommonColor font-Josefin text-base font-bold">
                <Link to={"/"}>Back To Home</Link>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center py-20">
                <picture>
                    <img src={CompanyLogo} alt={CompanyLogo} />
                </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error
