import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      video:
        "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      video: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      video:
        "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      video: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
      video: "https://cdn.refokus.com/website/jungle-4-3-.webm",
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 15.5);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product val={val} mover={mover} count={index} key={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none mt-25">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute left-[42%] w-[20rem] h-[15rem] bg-white rounded-lg overflow-hidden"
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full rounded-lg"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src={item.video}
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
