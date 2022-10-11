import React, { useEffect, useState } from "react";

import { motion, Variants } from "framer-motion";
// import ArrowKeysReact from 'arrow-keys-react';
// import "./styles.css";
const AboutMe = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
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
      <h3 className="flex items-center my-2">
        <span
          aria-hidden="true"
          className="grow bg-gray-200 rounded h-0.5"
        ></span>
        <span className="text-lg font-medium mx-3">About Me</span>
        <span
          aria-hidden="true"
          className="grow bg-gray-200 rounded h-0.5"
        ></span>
      </h3>
      <ul className="steps steps-vertical">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
  <li className="step">Receive Product</li>
</ul>
      <div className="bg-white">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-700">
              Documentation
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Getting Started with Tailkit
            </h2>
            <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
              Get to know how it can help you build the User Interface of your
              website and web application with the minimal effort.
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
