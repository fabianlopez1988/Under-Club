import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { motion, useScroll } from "framer-motion";
import AnimatedRoutes from "./AnimatedRoutes";
import { useEffect, useState } from "react";
import logo from "./assets/UClogo.jpg";

function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* {loading ? (
          <div className="logo-app-loading">
            <img className="logo-app-img" src={logo} alt="logo under"/>
          </div>
      ) : (
        <div className="App">
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <BrowserRouter>
            <NavBar />
            <AnimatedRoutes />
          </BrowserRouter>
        </div>
      )} */}
       <div className="App">
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <BrowserRouter>
            <NavBar />
            <AnimatedRoutes />
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;