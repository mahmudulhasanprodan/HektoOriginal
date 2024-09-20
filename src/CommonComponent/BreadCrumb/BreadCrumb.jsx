import React from 'react'
import { Link,useLocation } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const BreadCrumb = () => {
    const Location = useLocation();
    const BreadCrumbPathName = Location.pathname.split("/").filter((x) => x)
    let Breadcrumb = "";
    
  return (
    <>
      <div>
        <ul className="flex items-center gap-x-2">
          <li>
            <Link to={"/"} className={"font-Lato text-base text-black"}>Home</Link>
          </li>
          <span className="pt-[1px]">
            <MdKeyboardDoubleArrowRight />
          </span>
          {BreadCrumbPathName?.map((path,index)=> {
            const Islast = index === BreadCrumbPathName.length -1 
            Breadcrumb += path;
            console.log(Breadcrumb);
                    
            return (
              <li key={path}>
                {Islast ? (
                  <Link
                    className={`${
                      Islast
                        ? "text-HeaderTopColor text-base font-Lato font-bold"
                        : "font-Lato text-base text-black"
                    }`}
                  >
                    {path}
                  </Link>
                ) : (
                  <Link
                    to={`/${Breadcrumb}`}
                    className={`${
                      Islast
                        ? "text-HeaderTopColor text-base font-Lato font-bold"
                        : "font-Lato text-base text-black"
                    }`}
                  >
                    {path}
                  </Link>
                )}
              </li>
            );
          })}
         
        </ul>
      </div>
    </>
  );
}

export default BreadCrumb
