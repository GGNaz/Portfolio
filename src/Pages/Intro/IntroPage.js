import React, { useEffect, useState } from "react";
import mypicture from "../../assets/images/mypicture.jpg";
import head from "../../assets/images/head.png";
import ProgrammingPage from "../Programming/ProgrammingPage";
import Projects from "../Projects/Projects";
import { motion } from "framer-motion";
import NavBar from "../../Navigations/Navbar";
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
  //   <div class="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
  //    <div class="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
  //     <div class="lg:w-96 relative">
  //       <div class="absolute pattern-dots-xl text-indigo-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
  //       <div class="absolute pattern-dots-xl text-indigo-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
  //       <div class="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
  //       <div class="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-indigo-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
  //       <img
  //             src={mypicture}
  //             alt="Hero Image"
  //             className="relative rounded-lg mx-auto shadow-lg"
  //           />
     
  //     </div>
  //   </div>
  //   <div class="lg:w-1/2 lg:flex lg:items-center">
  //     <div>
  //       <div class="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded  bg-yellow-100 border">
  //        Looking for a Web Developer?
  //       </div>
  //       <h1 class="text-3xl md:text-4xl font-extrabold mb-2">
  //         Hi, I'm Naz
  //       </h1>
  //       <h2 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
  //         Front End Developer / Web Developer
  //       </h2>
  //       {/* <div class="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
  //         <a href="javascript:void(0)" class="rounded-full inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
  //           <span>Hire me</span>
  //           <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  //         </a>
  //       </div> */}
  //     </div>
  //   </div>
  // </div>
  

 
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80")` }}>

      
  <div className="hero-overlay bg-opacity-70">
  <NavBar />
  </div>
  
  <div className="hero-content text-center text-neutral-content">
 
    <div className="max-w-md">
  
      <h1 className="mb-5 text-5xl font-bold">Nazer Somera</h1>
      <p className="mb-5">Front End Developer / Web Developer</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
     
    </div>
   
  </div>
  {/* <div className="text-white fixed bottom-2">Learn more about what I do</div> */}
</div>  
     
  );
};

export default IntroPage;
