import React, { useEffect, useState } from 'react'
import mypicture from "../../assets/images/mypicture.jpg"
import head from "../../assets/images/head.png"
import ProgrammingPage from '../Programming/ProgrammingPage';
import Projects from '../Projects/Projects';
// import { motion } from "framer-motion";
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
    <div className="bg-gray-100" >
    
    
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <div className="flex items-center text-center lg:text-left">
    <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
      <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>
      <div className="space-y-10">
      
          <h2 className="text-3xl md:text-4xl font-extrabold ">
          Hi! I Am
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
           Nazer Somera
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
           Im tired hire me!
          </h3>
        </div>

    
    </div>
  
    <div className="flex items-center lg:justify-end text-blue-500">
      <div className="lg:w-96 relative">
        <div className="absolute pattern-dots-xl text-blue-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
        <div className="absolute pattern-dots-xl text-blue-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
        <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
        <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
        <img src={mypicture} alt="Hero Image" className="relative rounded-lg mx-auto shadow-lg"/>
      </div>
    </div>
  
  </div>
  <ProgrammingPage/>
  <Projects/>
</div>
  )
}

export default IntroPage;
