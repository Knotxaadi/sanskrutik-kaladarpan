import React from "react";
import chandrashekar_sandve from "/src/assets/comittie-main/chandrashekar_sandve.jpeg";

import sunil_khedekar from "/src/assets/comittie-main/sunil_khedekar.jpeg";
import tanmay_sandve from "/src/assets/comittie-main/tanmay_sandve.jpeg";
import sudhir_somwanshi from "/src/assets/comittie-main/sudhir_somwanshi.jpeg";
import Sarvesh_Sandve from "/src/assets/comittie-main/Sarvesh_Sandve.jpeg";
import vikas_mojar from "/src/assets/comittie-main/vikas_mojar.jpeg";
import sekhar_lad from "/src/assets/comittie-main/sekhar_lad.jpeg";

import nikhil_malusare from "/src/assets/comittie-second/nikhil_malusare.jpg";
import pradip_sale from "/src/assets/comittie-second/pradip_sale.jpeg";
import shashank_somwanshi from "/src/assets/comittie-second/shashank_somwanshi.jpeg";
import santosh_pote from "/src/assets/comittie-second/santosh_pote.jpeg";
import shivaji_chavan from "/src/assets/comittie-second/shivaji_chavan.jpeg";
import jyoti_sandve from "/src/assets/comittie-second/jyoti_sandve.jpeg";
import datta_javalge from "/src/assets/comittie-second/datta_javalge.jpeg";
import padmakar_gandhi from "/src/assets/comittie-second/padmakar_gandhi.jpeg";

const names = [
  {
    name: "Sunil Khedekar",
    position: "Vice President",
    src: sunil_khedekar,
  },
  {
    name: "Tanmay Sandve",
    position: "Director",
    src: tanmay_sandve,
  },
  {
    name: "Sudhir Somwanshi",
    position: "Secretary",
    src: sudhir_somwanshi,
  },
  {
    name: "Sarvesh Sandve",
    position: "Treasurer",
    src: Sarvesh_Sandve,
  },
  {
    name: "Vikas Mojar",
    position: "Head of Competition",
    src: vikas_mojar,
  },
  {
    name: "Sekhar Lad",
    position: "Vice-Secretary",
    src: sekhar_lad,
  },
];
const names_2 = [
  {
    name: "Nikhil Malusare",
    position: "Media Head",
    src: nikhil_malusare,
  },
  {
    name: "Pradip Sale",
    position: "Design Promoter",
    src: pradip_sale,
  },
  {
    name: "Shashank Somwanshi",
    position: "Coordinator",
    src: shashank_somwanshi,
  },

  {
    name: "Dr. Santosh Pote",
    position: "Trustee",
    src: santosh_pote,
  },
  {
    name: "Shivaji Chavan",
    position: "Trustee",
    src: shivaji_chavan,
  },
  {
    name: "Jyoti Sandve",
    position: "Trustee",
    src: jyoti_sandve,
  },
  {
    name: "Datta Ji Javalge",
    position: "Trustee",
    src: datta_javalge,
  },
  {
    name: "Padmakar Gandhi",
    position: "Trustee",
    src: padmakar_gandhi,
  },
];

const Commitiee = () => {
  return (
    <>
      <div id="Commitiee" className="Commitiee scroll-mt-24">
        <div className="comiti m-2 p-2 ">
          <div className="col p-2 bg-[#0D0D0D]/80 backdrop-blur-[2px] rounded-2xl">
            <div className="header text-[#F7C625]">
              <h1 className="text-4xl font-bold font-[cinzel] text-center">
                Committiee
              </h1>
              <hr className="m-2" />
            </div>
            <div className="data">
              <div className="president flex items-center gap-4 justify-center max-md:flex-col">
                <div className="relative w-60 h-60 flex justify-center items-center">
                  <img
                    className="w-46 rounded-full object-cover"
                    src={chandrashekar_sandve}
                    alt=""
                  />
                  <img
                    className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                    src="./src/assets/main-img/frame1.png"
                    alt=""
                  />
                </div>
                <div className="names">
                  <h1 className="text-3xl max-md:text-2xl font-bold text-[#F7C625] font-[cinzel]">
                    Chandrashekar Sandve
                  </h1>
                  <p className="text-[#DCDCDC] text-2xl text-center">
                    President | Founder
                  </p>
                </div>
              </div>

              <hr className="p-2 m-5 text-[#DCDCDC]" />

              <div className="flex p-4 gap-5 flex-wrap justify-center">
                {names.map((i, id) => {
                  return (
                    <div
                      className="president flex flex-col items-center gap-4 justify-center"
                      key={id}
                    >
                      <div className="relative w-50 h-50 flex justify-center items-center">
                        <img
                          className="w-39 h-39 rounded-full object-cover flex justify-center items-center "
                          src={i.src || "./src/assets/main-img/no-img.jpg"}
                          alt=""
                        />
                        <img
                          className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                          src="./src/assets/main-img/frame2.png"
                          alt=""
                        />
                      </div>
                      <div className="names flex flex-col items-center">
                        <h1 className="text-xl font-bold text-[#F7C625] font-[cinzel]">
                          {i.name}
                        </h1>
                        <p className="text-[#DCDCDC] text-2xl">{i.position}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className="p-2 m-5 text-[#DCDCDC]" />
              <div className="flex p-4 gap-5 flex-wrap justify-center">
                {names_2.map((i, id) => {
                  return (
                    <div
                      className="president flex flex-col items-center gap-4 justify-center"
                      key={id}
                    >
                      <div className="relative w-40 h-40 max-md:w-30 max-md:h-30 flex justify-center items-center">
                        <img
                          className="w-30 h-30 max-md:w-22 max-md:h-22 rounded-full object-cover flex justify-center items-center "
                          src={i.src || "./src/assets/main-img/no-img.jpg"}
                          alt=""
                        />
                        <img
                          className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                          src="./src/assets/main-img/frame2.png"
                          alt=""
                        />
                      </div>
                      <div className="names flex flex-col items-center">
                        <h1 className="text-[16px] max-md:text-[12px] font-bold text-[#F7C625] font-[cinzel]">
                          {i.name}
                        </h1>
                        <p className="text-[#DCDCDC] text-[16px] max-md:text-[12px]">
                          {i.position}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitiee;
