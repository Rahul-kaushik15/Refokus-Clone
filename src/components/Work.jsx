import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
const Work = () => {
   const [images, setimages] = useState([
        {url: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/04/62691e3f5b03b475709242.png", top: "60%" , left:"50%", isActive: false},
        {url: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/10/6357d93c253ca036595692.png", top: "54%" , left:"47%", isActive: false},
        {url: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/02/620b689d1b804433777871.png", top: "45%" , left:"55%", isActive: false},
        {url: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/03/622c82f8a80bf768794737.png", top: "62%" , left:"53%", isActive: false},
        {url: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/09/632d9d79ccb3e938410704.png", top: "49%" , left:"45%", isActive: false},
        {url: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/10/63450e17d43c9156312604.png", top: "64%" , left:"52%", isActive: false},
       
    ]
);
   const {scrollY,scrollYProgress,scrollX,scrollXProgress,}  = useScroll()

    function ImagesShow(arr){
        setimages(prev => (
            prev.map((item,index) => (
                arr.indexOf(index) === -1 ? (
                    {...item, isActive: false}
                ) : 
                {...item, isActive: true}
            ))
        ))
    }

    scrollYProgress.on("change", (data)=> {
       switch(Math.floor(data*100)){
        case 0:
            ImagesShow([])
            break;
        case 1:
            ImagesShow([0])
            break;
        case 2:
            ImagesShow([0,1])
            break;
        case 3:
            ImagesShow([0,1,2])
            break;
        case 4:
            ImagesShow([0,1,2,3])
            break;
        case 5:
            ImagesShow([0,1,2,3,4])
            break;
        case 6:
            ImagesShow([0,1,2,3,4,5])
            break;
       }
    })
    
  return (
    <div className='w-full'>
        <div className='relative max-w-5xl mx-auto text-center'>
            <h1 className='text-[35vw] leading-none font-regular select-none tracking-tight'>work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((elem,index)=> elem.isActive && (
                    <img key={index} className='absolute w-65 h-65 rounded-lg -translate-x-[50%] -translate-y-[50%] ' src={elem.url} style={{top: elem.top, left:elem.left}} alt="" />
                ))}
            </div>
            <h1 className='font-semibold text-zinc-400 text-xl mt-6'>Web Design, Webflow Development, Creative Development</h1>
        </div>
    </div>
  )
}

export default Work