import React from 'react'
import ContactInfo from '../ContactInfo/ContactInfo'
import Flex from '../../CommonComponent/Flex/Flex'
import ContactVector from "../../assets/ContactPageImage/ContactPageVector.png"
import { IoIosSend } from "react-icons/io";


const ContactDetails = () => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <ContactInfo />
          </div>
          <Flex className={"mt-10 item-center mb-48 gap-x-6"}>
            <div className="w-1/2">
              <div>
                <h2 className="font-Josefin font-bold text-2xl text-FtextColor">
                  Get In Touch
                </h2>
                <p className="font-Lato font-semibold text-sm text-OpacityColor text-justify mr-10 mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis optio minima reprehenderit molestias. Explicabo unde
                  cumque nobis eaque harum vitae laboriosam quasi perferendis
                  commodi minus?
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-y-10">
                <Flex className="flex items-center gap-x-3">
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    placeholder="Your Name*"
                    className="border-2 border-[#C2C5E1] py-2 pl-3 w-full rounded-md"
                  />
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="Your Email*"
                    className="border-2 border-[#C2C5E1] py-2 pl-3 w-full rounded-md"
                  />
                </Flex>
                <Flex className="flex flex-col items-center gap-y-10">
                  <input
                    type="text"
                    id="Subject"
                    name="Subject"
                    placeholder="Subject*"
                    className="border-2 border-[#C2C5E1] py-2 pl-3 w-full rounded-md"
                  />
                  <textarea
                    name="Message"
                    id="Message"
                    placeholder="Type Your Messege*"
                    className="border-2 border-[#C2C5E1] py-2 pl-3 w-full rounded-md min-h-32"
                  ></textarea>
                </Flex>
              </div>
              <div className="mt-6">
                <button className="flex items-center gap-x-2 px-12 py-2 bg-BtnColor text-CommonColor font-Lato font-bold text-base rounded-md">
                  Send Mail <IoIosSend />
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <picture>
                <img
                  src={ContactVector}
                  alt={ContactVector}
                  className="object-fill"
                />
              </picture>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default ContactDetails
