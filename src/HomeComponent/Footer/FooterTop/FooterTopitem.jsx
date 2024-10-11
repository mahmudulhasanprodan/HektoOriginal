import React from 'react'
import { Link } from 'react-router-dom'

const FooterTopitem = ({AllItem=["One","Two","Three"],Title}) => {


    
  return (
    <div>
      <div>
        <h2 className="font-Lato font-semibold tracking-[1px]">{Title ? Title : "Title Missing"}</h2>
        <ul className="mt-8 flex flex-col gap-y-3 text-OpacityColor font-Josefin text-sm">
          {AllItem?.map((item) => (
            <li>
              <Link to={"/"}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterTopitem
