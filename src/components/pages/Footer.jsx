import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import namelogo from "../../assets/main-img/skd name.png";
import logo from "../../assets/main-img/skd logoo.png";

const Footer = () => {
  return (
    <>
      <footer className=" w-full">
        <div className="Footer ">
          <div className="foot h-[30vh] mt-5 p-4 bg-[#3A1F44]  relative">
            <div className="absolute left-2 top-10">
              <img
                className="w-60 max-md:w-30 max-sm:w-20"
                src={namelogo}
                alt=""
              />
            </div>
            <div className="absolute right-10 max-md:right-5">
              <img className="w-17 max-md:w-13 max-sm:w-11" src={logo} alt="" />
            </div>
            <div className="flex justify-evenly max-sm:justify-center max-sm:flex-col gap-2 items-center">
              <div className="left-side">
                <ul className="text-2xl max-sm:text-[16px] text-[#E8CFCF]  flex flex-col justify-center items-start">
                  <li className="hover:text-[#FFD37D]">
                    <Link to="/registration" className="">
                      2026 Entery Forms
                    </Link>
                  </li>
                  <li className="hover:text-[#FFD37D]">
                    <HashLink smooth to="/#About">
                      About
                    </HashLink>
                  </li>
                  <li className="hover:text-[#FFD37D]">
                    <HashLink smooth to="/#Commitiee">
                      Commitiee
                    </HashLink>
                  </li>
                  <li className="hover:text-[#FFD37D]">
                    <HashLink smooth to="/#Work">
                      Work
                    </HashLink>
                  </li>
                  <li className="hover:text-[#FFD37D]">
                    <HashLink smooth to="/#Contact">
                      Contact
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div className="right-side">
                <ul className="flex gap-2 justify-center items-baseline">
                  <li>
                    <a
                      href="https://www.instagram.com/sanskrutikkaladarapn/?hl=en"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x text-[#f0d3a2] hover:text-[#fa56ec]"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100090779630128"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook fa-2x max-sm:fa-1x text-[#f0d3a2] hover:text-[#36b5ff]"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@sanskrutikkaladarpan6270?si=qnpk1L3QcitgWkA1"
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube fa-2x max-sm:fa-1x text-[#f0d3a2] hover:text-[#d30000]"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright flex justify-center items-center max-md:text-[12px] p-2">
              <h1 className="text-gray-200">
                <b>©</b> {new Date().getFullYear()} <b>Sanskrutik Kaladarpan</b>
                . All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
