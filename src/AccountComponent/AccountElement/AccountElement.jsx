import React from 'react'
import CompanyLogo from "../../assets/HomeComponentImages/SponsoredLogo.png"

const AccountElement = () => {
  return (
    <>
      <div className="py-32">
        <div className="container">
          <div className="flex items-center justify-center px-4 sm:px-0">
            <div className="w-full sm:w-[545px] h-[474px] bg-CommonColor drop-shadow-CardShadow">
              <div className="w-full sm:w-[430px] h-full m-auto mt-10 px-2 sm:px-0">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-Josefin font-bold text-2xl text-FtextColor">
                    Login
                  </h2>
                  <p className="font-Lato font-normal text-OpacityColor mt-1">
                    Please login using account detail bellow.
                  </p>
                </div>
                <div className="flex flex-col gap-y-6 mt-8">
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    placeholder="Email Address"
                    className="border-2 border-[#C2C5E1] w-full py-2 pl-3 rounded-sm"
                  />
                  <input
                    type="password"
                    id="Password"
                    name="Password"
                    placeholder="Password"
                    className="border-2 border-[#C2C5E1] w-full py-2 pl-3 rounded-sm"
                  />
                  <p className="font-Lato font-normal text-OpacityColor hover:underline cursor-pointer hover:text-red-400">
                    Forgot your password?
                  </p>
                  <button
                    id="Btn"
                    className="px-8 py-2 bg-BtnColor w-full text-CommonColor font-Lato font-bold text-base rounded-sm"
                  >
                    Sign In
                  </button>
                </div>
                <div>
                  <p className="font-Lato font-normal text-OpacityColor mt-6 text-center cursor-pointer">
                    Don’t have an Account?
                    <span className="hover:underline hover:text-blue-400">
                      Create account
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex items-center justify-center">
              <picture>
                <img src={CompanyLogo} alt={CompanyLogo} />
              </picture>
            </div>
        </div>
      </div>
    </>
  );
}

export default AccountElement
