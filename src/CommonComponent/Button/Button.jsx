import React from 'react'

const Button = ({className,title}) => {
  return (
    <>
      <button className={className ? className : "px-10 py-2 bg-red-400"}>{title ? title : "Button"}</button>
    </>
  )
}

export default Button
