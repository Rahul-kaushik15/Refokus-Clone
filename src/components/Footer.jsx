import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-5xl py-10 flex mx-auto gap-30'>
            <div className='basis-1/2 '>
            <h1 className='text-9xl font-medium mt-10 tracking-tight leading-none mb-10'>refokus.</h1>
            {["Privacy Policy","Cookie Policy","Impressum","Terms"].map((item,index) => <a key={index} className='mr-5 text-zinc-500 text-sm font-semibold'>{item}</a>)}
            </div>
            <div className='basis-1/2 flex '>
                <div className='basis-1/3'>
                    <h4 className='mb-5 text-zinc-400'>Socials</h4>
                    {["Instagram","twitter (x?)","LinkedIn"].map((item,index)=> <a key={index} className='block mt-2 text-zinc-500 capitalize'>{item}</a>)}
                </div>

                 <div className='basis-1/3'>
                    <h4 className='mb-5 text-zinc-400'>Sitemap</h4>
                    {["Home","work","careers","contact"].map((item,index)=> <a key={index} className='block mt-2 text-zinc-300 capitalize'>{item}</a>)}
                </div>

                <div className='basis-[52%] flex flex-col items-end'>
                    <p className='text-right'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi ea distinctio.</p>
                    <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" className='w-32 mt-6' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer