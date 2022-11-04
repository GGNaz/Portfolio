import { Fragment, useState } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";

export default function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
 
  return (
    <>
      {/* Page Container */}
      <div id="page-container" className="bg-opacity-50">
        {/* Page Header */}
        <header id="page-header" className="flex flex-none items-center z-1">
          <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between py-4">
              {/* Left Section */}
              <div className="flex items-center">
                {/* Logo */}
                <a href="#" className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-100 hover:text-blue-600 active:text-gray-700">
                  
                  <span>Portfolio.</span>
                </a>
                {/* END Logo */}
              </div>
           
            </div>

          </div>
        </header>
        {/* END Page Header */}

        {/* Page Content */}
    
        {/* END Page Footer */}
        
      </div>
      {/* END Page Container */}
    </>
  )
}