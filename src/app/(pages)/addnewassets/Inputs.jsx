import React from 'react'

export const Input = ({
    name,
    label,
    type
}) => {
  return (
    <input name={name} className=" border-b bg-transparent   w-full text-amber-50 mr-3 py-1 px-2 leading-tight focus:outline-none" type={type} placeholder={label} aria-label={label}/>
 
  )
}
