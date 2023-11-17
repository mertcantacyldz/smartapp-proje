import { motion, Variants } from "framer-motion";
import  React from 'react';
 
const Loader = () => {
  const variants: Variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };

  return (
    <div className="min-h-screen  items-center justify-center bg-back p-2 flex flex-col gap-3">
 <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex  gap-1"
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <motion.div key={index} variants={variants} className="h-36 w-10 bg-white" />
      ))}

    </motion.div>
    </div>
   
  );
};

export default Loader;