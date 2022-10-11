import "./App.css";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { getAllComponentsRoutes } from "./middleware/getComponentRoutes";
import NavBar from "./Navigations/Navbar";
import IntroPage from "./Pages/Intro/IntroPage";
function App() {
  return (
    <div>
      <NavBar />
      <IntroPage />
      <a href="https://www.facebook.com/RazenSe">
        <button
          onclick="buttonHandler()"
          title="Message me on Facebook"
          class="fixed z-90 bottom-10 right-8 bg-blue-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-500 hover:drop-shadow-2xl hover:animate-bounce duration-300"
        >
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
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </button>
      </a>
      {/*    
      <Routes>
     
        {publicRoutes.map((item, index) => {
          return <>{getAllComponentsRoutes(item, index)}</>;
        })}
      
      </Routes>  */}
    </div>
  );
}

export default App;
