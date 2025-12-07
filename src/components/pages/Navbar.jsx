import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import navlogo from "/src/assets/main-img/skd name (1).png";

const Navbar = () => {
  const [cls, SetCls] = useState("translate-x-170");
  const [hide, SetHide] = useState("hidden");
  const showSlide = () => {
    const nextCls =
      cls === "translate-x-0" ? "translate-x-170" : "translate-x-0";
    if (nextCls === "translate-x-0") {
      SetHide("");
    }
    setTimeout(() => {
      SetCls(nextCls);
    }, 50);
    if (nextCls === "translate-x-170") {
      setTimeout(() => {
        SetHide("hidden");
      }, 300);
    }
  };

  return (
    <>
      <div className="top-0 left-0 sticky z-1">
        <div className="Navbar p-2 bg-[#1F1F1F]">
          <div className="Nav font-bold text-3xl italic relative">
            <div className="flex items-center justify-between Navv relative">
              <div className="img">
                <HashLink smooth to="/#Home">
                  <img className="name-img w-[100px]" src={navlogo} alt="" />
                </HashLink>
              </div>
              <div className="nav text-[#f7c625]">
                <ul className="flex justify-between items-center gap-5">
                  <li>
                    <HashLink smooth to="/#Home">
                      Home
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/#About">
                      About
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/#Work">
                      Work
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#Commitiee">
                      Committee
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/#Contact">
                      Contact
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div className="lines">
                <i
                  onClick={showSlide}
                  className="fa-solid fa-bars text-[gold] bars"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`slidebar p-3 bg-[#111] text-gray-300 w-70 absolute top-0 right-0  ${cls}  duration-500 ease-in-out ${hide}`}
        >
          <div className="h-screen w-full">
            <div className="flex justify-end p-2">
              <i onClick={showSlide} className="fa-solid fa-x fa-2x"></i>
            </div>
            <hr className="p-2 m-2" />
            <ul className="flex flex-col justify-start items-start gap-5 text-2xl">
              <li>
                <HashLink onClick={showSlide} smooth to="/#Home">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink onClick={showSlide} smooth to="/#About">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink onClick={showSlide} smooth to="/#Work">
                  Work
                </HashLink>
              </li>
              <li>
                <HashLink onClick={showSlide} smooth to="#Commitiee">
                  Committee
                </HashLink>
              </li>
              <li>
                <HashLink onClick={showSlide} smooth to="/#Contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
