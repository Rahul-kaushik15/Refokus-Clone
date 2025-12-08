import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-4 py-5 border-[0.1px] border-zinc-400 flex items-center justify-between'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe