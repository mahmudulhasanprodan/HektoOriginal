import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Flex from '../../../CommonComponent/Flex/Flex';


const FooterBottom = () => {
  return (
    <>
      <div className="bg-FooterBtmColor">
        <div className="container">
          <Flex className={"items-center justify-around"}>
            <div className="hidden md:block">
              <p className="font-Josefin text-OpacityColor text-base">
                &copy;<span>Webecy - All Rights Reserved</span>
              </p>
            </div>
            <div className="flex items-center py-6 gap-x-6 cursor-pointer">
              <Link to={"https://www.facebook.com/mistermahmudul"} target="_blank">
                <FaFacebook className="w-6 h-6 text-FtextColor" />
              </Link>
              <Link to={""}>
                <FaLinkedin className="w-6 h-6 text-FtextColor" />
              </Link>
              <Link to={""}>
                <FaSquareInstagram className="w-6 h-6 text-FtextColor" />
              </Link>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default FooterBottom
