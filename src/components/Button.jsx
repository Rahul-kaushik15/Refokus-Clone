import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Start a Project"}) => {
  return (
    <div className='w-37 px-4 py-2 rounded-full bg-zinc-100 text-black flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight />

    </div>
  )
}

export default Button