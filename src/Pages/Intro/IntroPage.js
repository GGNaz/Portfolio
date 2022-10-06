import React, { useEffect, useState } from "react";
import mypicture from "../../assets/images/mypicture.jpg";
import head from "../../assets/images/head.png";
import ProgrammingPage from "../Programming/ProgrammingPage";
import Projects from "../Projects/Projects";
import { motion } from "framer-motion";
// import ArrowKeysReact from 'arrow-keys-react';
// import "./styles.css";
const IntroPage = () => {
  // const [ isHoverMe, setIsHoverMe ] = useState(false)
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // let totalX = x*1;
  // let totalY = y*1;

  // ArrowKeysReact.config({
  //   left: () => {

  //     setX(totalX-50)
  //   },
  //   right: () => {

  //     setX(totalX+50)
  //   },
  //   up: () => {

  //     setY(totalY-50)
  //   },
  //   down: () => {

  //     setY(totalY+50)
  //   }
  // });
  // {...ArrowKeysReact.events}
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="flex items-center text-center lg:text-left">
          <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
          <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>
          <div className="space-y-10">
            <div>
              <h1 className="text-2xl font-bold tracking-wider text-blue-500">Hi! I Am</h1>
              <h1 className="text-5xl md:text-4xl font-extrabold text-gray-700">
                Nazer Somera
              </h1>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 mb-4">
                (Junior Developer)
              </h3>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <button
                  type="submit"
                  style={{ borderRadius: "20px" }}
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-blue-600 bg-blue-100 text-blue-800 hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                >
                  Hire me{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6, ml-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex items-center lg:justify-end text-blue-500">
          <div className="lg:w-96 relative">
            <div className="absolute pattern-dots-xl text-blue-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
            <div className="absolute pattern-dots-xl text-blue-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
            <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
            <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
            <motion.div
     className="box"
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{
       default: {
         duration: 0.1,
         ease: [0, 0.71, 0.2, 1.01]
       },
       scale: {
         type: "spring",
         damping: 5,
         stiffness: 100,
         restDelta: 0.001
       }
     }}
    >
            <img
              src={mypicture}
              alt="Hero Image"
              className="relative rounded-lg mx-auto shadow-lg"
            />
            </motion.div>
          </div>
        </div>
      </div>
      <ProgrammingPage />
      <Projects />
    </div>
  );
};

export default IntroPage;
