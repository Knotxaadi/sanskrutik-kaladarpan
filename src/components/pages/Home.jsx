import React from "react";
import "./Home.css";
import CurvedLoop from "./Curved";
import { Link } from "react-router-dom";
import award from "../../assets/main-img/skd logoo.png";

const Home = () => {
  return (
    <>
      <div id="Home" className="scroll-mt-24">
        <div className="Home h-[86vh] p-2 m-3 bg-[#3A1F44]/90 backdrop-blur-[1px] rounded-3xl  relative overflow-hidden">
          {/* Put marquee INSIDE the box */}
          <div className="absolute flex justify-center flex-col  h-full top-2 left-0 w-full pointer-events-none">
            <CurvedLoop
              marqueeText="Sanskrutik Kaladarpan ✦ संस्कृतिक कलादर्पण ✦"
              speed={2}
              curveAmount={0}
              direction="right"
              interactive={true}
              className="font-[cinzel] fill-[#e4b638]   italic font-bold  "
              Divclass="items-start"
            />
            <CurvedLoop
              marqueeText="Sanskrutik Kaladarpan ✦ संस्कृतिक कलादर्पण ✦"
              speed={2}
              curveAmount={0}
              direction="left"
              interactive={true}
              className="font-[cinzel] fill-[#e4b638]  italic font-bold "
              Divclass="items-end"
            />
          </div>

          {/* Your original content */}
          <div className="flex max-md:flex-col  items-center justify-evenly h-full">
            <div className="skd-text flex flex-col font-[cinzel] font-bold justify-center items-center ">
              <div className="p-4 flex flex-col justify-center items-center">
                <p className="heading-text text-2xl text-[white] text-shadow-[0_0_1px]">
                  28 Years of
                </p>
                <p className="text-[12px] word-space text-white">
                  Chandrasekhar Sandve Pratishthan Present
                </p>
                <h1 className="heading text-5xl p-0 text-[#f7c625] text-shadow-[0_0_1px]">
                  Sanskrutik
                </h1>
                <h1 className="heading text-5xl p-0 text-[#f7c625] text-shadow-[0_0_1px]">
                  Kaladarpan
                </h1>
              </div>
              <div className="flex items-center max-md:flex-col">
                <Link
                  to="/registration"
                  className="p-2 m-2 border rounded-full bg-[#b90000] text-[#f7c625] lg:text-2xl hover:shadow-[2px_2px_30px_red] shadow-[2px_2px_20px_red]  animate-pulse duration-400 flex justify-center items-center"
                >
                  2026 Entery Forms
                </Link>
                <p className="text-blue-300">Drama | TV Serial</p>
                <p className="text-blue-300">| Movie | Short Film</p>
              </div>
            </div>
            <div className="flex items-center  justify-center ">
              <img
                className="imagee h-[60vh] duration-300"
                src={award}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
