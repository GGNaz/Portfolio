import React, { useEffect, useState } from "react";

import { motion, Variants } from "framer-motion";
// import ArrowKeysReact from 'arrow-keys-react';
import nazerimg from "../../assets/images/nazerr.jpg";
// import "./styles.css";
const AboutMe = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: -10,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      // animate={{ x: 180 }}
      whileInView="onscreen"
      transition={{ type: "spring", stiffness: 50 }}
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      initial="offscreen"
    >
     <div className="flex flex-row justify-center  min-h-screen  lg:flex-row md:flex-row sm:flex-col xs:flex-col">
        <div className="flex sm:justify-center xs:justify-center items-center">
          
        <img
                
                src={nazerimg}
                alt="nazerimg"
                className="max-w-sm rounded-lg shadow-2xl max-h-96 items-center mx-5"
              />
        </div>
        <div className="flex flex-col mx-5 justify-center ">
           
             <h1 className="text-5xl font-bold ">About Me</h1>
           
            <p className="py-6">
              Hi! I'm Nazer and i love creating things that live on the
              internet. My interest in web development started way back in 2018
              when i was a college student. Im currently focusing Front End development and I already know how to use API's and how 
              to integrate from the backend services to user interface (UI).
            </p>
              
          </div>

     </div>
      
    </motion.div>
  );
};

export default AboutMe;
