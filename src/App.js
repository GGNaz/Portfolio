import "./App.css";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { getAllComponentsRoutes } from "./middleware/getComponentRoutes";
import NavBar from "./Navigations/Navbar";
import IntroPage from "./Pages/Intro/IntroPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Skills from "./Pages/Skills/Skills";
import Footer from "./Pages/Footer/Footer";
import Contacts from "./Navigations/Contacts";
function App() {
  return (
    <div >
      <IntroPage />
      <AboutMe />
      <Skills />
      <Footer />
      <Contacts />
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
