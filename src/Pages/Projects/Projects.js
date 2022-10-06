import React from 'react'
import moa from "../../assets/images/moa.jpg";
import nuvali from "../../assets/images/nuvali.jpg";
import vermosa from "../../assets/images/vermosa.jpg";
const Projects = () => {
  return (
    <div class="bg-white">
      
    <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <h3 class="flex items-center my-8">
  <span aria-hidden="true" class="grow bg-gray-200 rounded h-0.5"></span>
  <span class="text-lg font-medium mx-3">Bike Destination</span>
  <span aria-hidden="true" class="grow bg-gray-200 rounded h-0.5"></span>
</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <a href="javascript:void(0)" class="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
          <img src={moa} alt="Product Image" class="transform transition ease-out group-hover:scale-110"/>
          <div class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
          <div class="p-4 flex items-center justify-center absolute inset-0">
            <div class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
              Mall of Asia
            </div>
          </div>
        </a>
        <a href="javascript:void(0)" class="block group relative transition ease-out active:opacity-75 overflow-hidden">
          <img src={vermosa} alt="Product Image" class="transform transition ease-out group-hover:scale-110"  style={{height: "100%"}}/>
          <div class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
          <div class="p-4 flex items-center justify-center absolute inset-0">
            <div class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
              Vermosa
            </div>
          </div>
        </a>
        <a href="javascript:void(0)" class="block group relative transition ease-out active:opacity-75 overflow-hidden">
          <img src={nuvali} alt="Product Image" class="transform transition ease-out group-hover:scale-110" style={{height: "100%"}}/>
          <div class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
          <div class="p-4 flex items-center justify-center absolute inset-0">
            <div class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
              Nuvali
            </div>
          </div>
        </a>
        <a href="javascript:void(0)" class="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
          <img src="https://source.unsplash.com/ALpEkP29Eys/700x700" alt="Product Image" class="transform transition ease-out group-hover:scale-110"/>
          <div class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
          <div class="p-4 flex items-center justify-center absolute inset-0">
            <div class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
             Mayang Falls
            </div>
          </div>
        </a>
        <a href="javascript:void(0)" class="block group relative transition ease-out active:opacity-75 overflow-hidden">
          <img src="https://source.unsplash.com/164_6wVEHfI/700x700" alt="Product Image" class="transform transition ease-out group-hover:scale-110"/>
          <div class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
          <div class="p-4 flex items-center justify-center absolute inset-0">
            <div class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
              Alabang
            </div>
          </div>
        </a>
        <a href="javascript:void(0)" class="block group relative transition ease-out active:opacity-75 overflow-hidden">
          <img src="https://source.unsplash.com/wW7XbWYoqK8/700x700" alt="Product Image" class="transform transition ease-out group-hover:scale-110"/>
          <div class="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
          <div class="p-4 flex items-center justify-center absolute inset-0">
            <div class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
              Evia
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Projects;