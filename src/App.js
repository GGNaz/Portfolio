import "./App.css";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { getAllComponentsRoutes } from "./middleware/getComponentRoutes";
import NavBar from "./Navigations/Navbar";
function App() {
  return (
    <>
    <NavBar/>
      <Routes>
     
        {publicRoutes.map((item, index) => {
          return <>{getAllComponentsRoutes(item, index)}</>;
        })}
      
      </Routes>
    </>
  );
}

export default App;
