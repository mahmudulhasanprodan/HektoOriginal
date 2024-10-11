import React from 'react'
import Flex from '../../CommonComponent/Flex/Flex'

const ContactInfo = () => {
  return (
    <>
      <Flex className={"gap-x-10"}>
        <div className="w-1/2 py-32">
          <div>
            <h2 className="font-Josefin font-bold text-2xl text-FtextColor">
              Information About us
            </h2>
            <p className="font-Lato font-semibold text-sm text-OpacityColor text-justify mr-20 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem molestias earum minus fugiat quis delectus, est commodi
              quam aliquam atque ab ea ex ipsa cum beatae aliquid consequuntur
              corporis voluptatibus saepe sit dolorem odit? Assumenda.
            </p>
          </div>
          <div className="flex items-center gap-x-3 mt-8">
            <div className="w-4 h-4 rounded-full bg-red-400"></div>
            <div className="w-4 h-4 rounded-full bg-green-400"></div>
            <div className="w-4 h-4 rounded-full bg-blue-400"></div>
          </div>
        </div>
        <div className="w-1/2 py-32">
          <div>
            <h2 className="font-Josefin font-bold text-2xl text-FtextColor">
              Contact Way
            </h2>
          </div>
          <div className="flex flex-col gap-y-6">
          <div className="flex items-center gap-x-10 mt-4">
          <Flex className={"items-center gap-x-3"}>
              <div className="w-10 h-10 rounded-full bg-blue-500"></div>
              <div>
                <h2 className="font-Lato font-semibold text-sm text-OpacityColor">Tel: 877-67-88-99</h2>
                <h3 className="font-Lato font-semibold text-sm text-OpacityColor">E-Mail: shop@store.com</h3>
              </div>
            </Flex>
            <Flex className={"items-center gap-x-3"}>
              <div className="w-10 h-10 rounded-full bg-red-500"></div>
              <div>
                <h2 className="font-Lato font-semibold text-sm text-OpacityColor">Support Forum</h2>
                <h3 className="font-Lato font-semibold text-sm text-OpacityColor">For over 24hr</h3>
              </div>
            </Flex>
          </div>
          <div className="flex items-center gap-x-10 mt-4">
          <Flex className={"items-center gap-x-3"}>
              <div className="w-10 h-10 rounded-full bg-yellow-500"></div>
              <div>
                <h2 className="font-Lato font-semibold text-sm text-OpacityColor">Tel: 877-67-88-99</h2>
                <h3 className="font-Lato font-semibold text-sm text-OpacityColor">E-Mail: shop@store.com</h3>
              </div>
            </Flex>
            <Flex className={"items-center gap-x-3"}>
              <div className="w-10 h-10 rounded-full bg-green-500"></div>
              <div>
                <h2 className="font-Lato font-semibold text-sm text-OpacityColor">Support Forum</h2>
                <h3 className="font-Lato font-semibold text-sm text-OpacityColor">For over 24hr</h3>
              </div>
            </Flex>
          </div>
          </div>
        </div>
      </Flex>
    </>
  );
}

export default ContactInfo