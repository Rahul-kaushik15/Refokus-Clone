import { motion } from 'motion/react'
import { img } from 'motion/react-client'
import React from 'react'


const Marquee = ({imagesurl,direction}) => {
  return (
    <div className='flex w-full  overflow-hidden'>
      <motion.div
       initial={{x: direction === 'left' ? "0" : "-100%"}} 
       animate={{x: direction === 'left' ? "-100%" : "0" }} 
       transition={{ease: "linear", duration: 20, repeat: Infinity}}
       className='h-20 flex flex-shrink-0 gap-40 py-5 pr-20'>
        {imagesurl.map((url,index) => (
          <img src={url} key={index} className=''/>
        ))}
      </motion.div>

           <motion.div
       initial={{x: direction === 'left' ? "0" : "-100%"}} 
       animate={{x: direction === 'left' ? "-100%" : "0" }} 
       transition={{ease: "linear", duration: 20, repeat: Infinity}}
       className='h-20 flex flex-shrink-0 gap-40 py-5 pr-20'>
        {imagesurl.map((url,index) => (
          <img src={url} key={index} className=''/>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee