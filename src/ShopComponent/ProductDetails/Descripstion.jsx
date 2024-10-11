import React, { useState } from 'react'
import Flex from '../../CommonComponent/Flex/Flex';
const Descripstion = () => {
    const[review,setreview] = useState(false);
    const[description,setdescription] = useState(false);

// HandleReview function start here     
const HandleReview = () => {
    setdescription(false);
    setreview(!review);
}

// handleDescription function start here
const handleDescription = () => {
    setreview(false);
    setdescription(!description);
}
 
  return (
    <>
      <div>
        <div className="flex items-center gap-x-10">
          <div onClick={handleDescription}>
            <h2
              className={`font-Josefin font-semibold text-base  cursor-pointer ${
                description ? "text-BtnColor" : "text-FtextColor"
              }`}
            >
              Description
            </h2>
          </div>
          <div onClick={HandleReview}>
            <h2
              className={`font-Josefin font-semibold text-base  cursor-pointer  ${
                review ? "text-BtnColor" : "text-FtextColor"
              }`}
            >
              Review(1)
            </h2>
          </div>
        </div>
        <div>
          {review && (
            <div className="mt-10">
              <h2 className="font-Josefin text-base font-bold text-FtextColor">
                John Ford
              </h2>
              <p className="font-Josefin tex-sm text-justify mr-20 mt-4 text-OpacityColor">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur consequatur officia quas nesciunt dolores nemo
                numquam sit quia maxime placeat asperiores reprehenderit
                laboriosam recusandae, unde earum praesentium saepe adipisci
                consectetur voluptas tempora debitis exercitationem? Iure!
              </p>
            </div>
          )}
        </div>
        <div>
          {description && (
            <div className="mt-10">
              <p className="font-Josefin tex-sm text-justify mr-20 mt-4 text-OpacityColor">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur consequatur officia quas nesciunt dolores nemo
                numquam sit quia maxime placeat asperiores reprehenderit
                laboriosam recusandae, unde earum praesentium saepe adipisci
                consectetur voluptas tempora debitis exercitationem? Iure!
              </p>
            </div>
          )}
        </div>
        <hr className="mt-3" />
        <div className="mt-10">
          <h2 className="font-Josefin font-bold text-xl text-FtextColor">
            Add a Review
          </h2>
          <Flex className={"flex-col gap-y-6"}>
            <div className="flex flex-col mt-10 gap-y-2">
              <label
                htmlFor="Name"
                className="font-Josefin font-bold text-FtextColor"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Your Name Here"
                className="border-b-[1px] border-b-gray-200 w-1/2"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="Email"
                className="font-Josefin font-bold text-FtextColor"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="Your Email Here"
                className="border-b-[1px] border-b-gray-200 w-1/2"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="Review"
                className="font-Josefin font-bold text-FtextColor"
              >
                Review
              </label>
              <textarea
                type="text"
                id="Review"
                name="Review"
                placeholder="Your Review Here"
                className="border-b-[1px] border-b-gray-200 w-1/2 min-h-20"
              ></textarea>
            </div>
            <div className="pb-20">
              <button
                id="Reviewbtn"
                className="px-8 py-1 bg-BtnColor rounded-sm text-CommonColor font-bold"
              >
                Post
              </button>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Descripstion
