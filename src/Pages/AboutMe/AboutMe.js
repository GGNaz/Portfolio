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
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div class="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
            <div class="lg:w-96 relative">
              <div class="absolute pattern-dots-xl text-blue-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
              <div class="absolute pattern-dots-xl text-blue-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
              <div class="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
              <div class="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
              {/* <img src="https://source.unsplash.com/MChSQHxGZrQ/800x1000" alt="Hero Image" class="relative rounded-lg mx-auto shadow-lg"> */}
              <img
                src={nazerimg}
                alt="nazerimg"
                className="mask mask-squircle max-w-sm rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-5xl font-bold ">About Me</h1>
            <p className="py-6">
              Hi! I'm Nazer and i love creating things that live on the
              internet. My interest in web development started way back in 2018
              when i was a college student.{" "}
            </p>
           
            <button className="btn btn-outline btn-blue-100 gap-2">
              View resume{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </motion.div>
  );
};

export default AboutMe;
