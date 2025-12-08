import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full mt-20'>
        <div className='max-w-5xl mx-auto py-25 flex  gap-1.5'>
            <Card width={"basis-[30%]"} start={false} para={true} />
            <Card width={"basis-[70%]"} start={true} para={false} hover="true" />
        </div>
    </div>
  )
}

export default Cards