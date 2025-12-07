import React, { useState, useEffect } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Work from "./pages/Work";
import Commitiee from "./pages/Commitiee";
import Contact from "./pages/Contact";
import ImageSlider from "./pages/ImageSlider";

const Layout = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    // Hide intro after 2.5s
    const timer1 = setTimeout(() => {
      setShowIntro(false);
      setShowNext(true); // show next component after intro
    }, 2000);

    return () => clearTimeout(timer1);
  }, []);

  return (
    <>
      {showIntro && (
        <div
          className={`fixed inset-0 bg-[#111] flex flex-col items-center justify-center z-50 fade-out`}
        >
          <h1
            className="gold-text text-[23px] font-bold font-[cinzel] md:text-6xl"
            data-text="Sanskrutik Kaladarpan"
          >
            Sanskrutik Kaladarpan
          </h1>

          <div className="w-72 md:w-96 h-1 bg-gray-700/40 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-yellow-400 loading-bar"></div>
          </div>
        </div>
      )}
      {showNext && (
        <div className={` mainnnn relative duration-300 `}>
          <Navbar />
          <Home />
          <ImageSlider />
          <About />
          <Work />
          <Commitiee />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
