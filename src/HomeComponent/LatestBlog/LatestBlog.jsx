import React from 'react'
import LatestBlogCard from './LatestBlogCard'
import { LatestBlogData } from '../../../JsonData/JsonData'

const LatestBlog = ({title}) => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="mt-10">
              <h2 className="font-Lato text-3xl text-FtextColor font-bold tracking-wider text-center">
                {title ? title : "No Title"}
              </h2>
            </div>
            <div className="py-10 flex items-center gap-x-6 justify-center">
              {LatestBlogData?.map((item) => (
                <div>
                  <LatestBlogCard
                    Title={item.title}
                    Subtitle={item.Details}
                    Button={item.Btn}
                    Image={item.img}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestBlog
