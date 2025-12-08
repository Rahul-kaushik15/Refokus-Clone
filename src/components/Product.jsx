import React from 'react'
import Button from './Button'

const Product = ({val,mover,count}) => {
  return (
    <div className='w-full h-[15rem] py-32 text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-5xl mx-auto flex items-center justify-between'>
            <h1 className='text-4xl capitalize font-semibold'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-4 text-lg'>{val.description}</p>
                {val.live && <Button title='Live Website'/>}
            </div>
        </div>
    </div>
  )
}

export default Product