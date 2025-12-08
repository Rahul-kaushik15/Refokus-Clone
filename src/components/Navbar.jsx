import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-5xl mx-auto py-5 flex items-center justify-between border-b-[0.1px] border-zinc-700'>
       <div className='nleft flex items-center'>
         <img className='w-20 h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmbYGke0O_IhoLDpD7cWbpXa05Em3H8_wdA&s" alt="" />
            <div className='links flex gap-13 ml-20 '>
                {["Home","Work","Culture", "", "News"].map((elem,index) => (
                    <a key={index} className='text-sm flex items-center gap-1 ' href="#">
                    {elem.length === 0 ? <span className='h-5 w-0.5 bg-zinc-700'></span> : index === 1 ? (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>) : null} 
                        {elem}
                    </a>
                ))}
                
            </div>
        </div>
        <Button />
    </div>
  )
}

export default Navbar