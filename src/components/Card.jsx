import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward, IoIosReturnRight } from "react-icons/io";


const Card = ({width, start, para, hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" &&  "#7443ff", padding:"27px" }} className={`p-5 bg-zinc-800 rounded-xl hover:${hover} ${width} min-h-[23em] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>Up Next: News</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-2xl mt-2">Insights and behind the scenes</h1>
      </div>
      <div className="down w-full">
        {
            start && (
                <>
                    <h1 className="text-8xl font-semibold mt-12 tracking-tight leading-none">Start a Project</h1>
                    <button className="rounded-full py-1 px-4 border flex items-center gap-3 mt-10">Contact Us 
                    <IoIosReturnRight/>
                    </button>
                </>
            )
        }
        {
            para && (

                <p className="text-zinc-400 font-medium">Explore what drives our team.</p>
            )
        }
      </div>
    </motion.div>
  );
};

export default Card;
