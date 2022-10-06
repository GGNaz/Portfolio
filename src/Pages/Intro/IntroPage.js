import React, { useEffect, useState } from 'react'
import mypicture from "../../assets/images/mypicture.jpg"
import head from "../../assets/images/head.png"
import ProgrammingPage from '../Programming/ProgrammingPage';
import Projects from '../Projects/Projects';
import { motion } from "framer-motion";
import ArrowKeysReact from 'arrow-keys-react';
// import "./styles.css";
const IntroPage = () => {
    const [ isHoverMe, setIsHoverMe ] = useState(false)
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    let totalX = x*1;
    let totalY = y*1;

    ArrowKeysReact.config({
      left: () => {
       
        setX(totalX-50)
      },
      right: () => {
     
        setX(totalX+50)
      },
      up: () => {
      
        setY(totalY-50)
      },
      down: () => {
       
        setY(totalY+50)
      }
    });

  return (
    <div class="bg-gray-100" {...ArrowKeysReact.events} tabIndex="1" >
    
    
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <div class="flex items-center text-center lg:text-left">
    <div class="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
      <div class="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>
      <div class="space-y-10">
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold ">
          Hi! I Am
          </h2>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
           Nazer Somera
          </h2>
          <h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
           Im tired hire me!
          </h3>
        </div>
{/*   
  <motion.div
  // whileHover={{ scale: 1.2 }}
  // whileTap={{x: 10 }}
  animate={{ x: x, y: y }}

>
        <div >
    
      <img src={head} alt="head" style={{height: 120, width: 100}}/>  
     
        </div>
        </motion.div>
        <div className="flex items-center text-center gap-1 cursor-pointer">
          
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{border: "1px solid black", borderRadius: "10px"}} onClick={() => setY(totalY+50)}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={() => setX(totalX-50)} style={{border: "1px solid black", borderRadius: "10px"}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={() => setX(totalX+50)} style={{border: "1px solid black", borderRadius: "10px"}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{border: "1px solid black", borderRadius: "10px"}} onClick={() => setY(totalY-50)}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg> 
</div>*/}
    
      </div>
    </div>
  
    <div class="flex items-center lg:justify-end text-blue-500">
      <div class="lg:w-96 relative">
        <div class="absolute pattern-dots-xl text-blue-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
        <div class="absolute pattern-dots-xl text-blue-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
        <div class="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
        <div class="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
        <img src={mypicture} alt="Hero Image" class="relative rounded-lg mx-auto shadow-lg"/>
      </div>
    </div>
  
  </div>
  <ProgrammingPage/>
  <Projects/>
</div>
  )
}

export default IntroPage;
