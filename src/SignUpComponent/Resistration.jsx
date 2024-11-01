import React from 'react'

const Resistration = ({className,labelItem,InputType,InputId,InputName,PlaceHolder,onInputChange,OnValue}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <label
        className="font-Josefin text-base text-FtextColor font-bold"
        htmlFor={labelItem}
      >
        {labelItem}
      </label>
      <input
        className={className}
        type={InputType}
        id={InputId}
        name={InputName}
        placeholder={PlaceHolder}
        onChange={onInputChange}
        value={OnValue}
      />
    </div>
  );
}

export default Resistration
