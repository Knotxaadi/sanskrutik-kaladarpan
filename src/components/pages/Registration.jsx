import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const pdf = [
  {
    pdf: "../Form/sample_pds.pdf",
    name: "Short Flim",
  },
  {
    pdf: "../Form/sample_pds.pdf",
    name: "Movie",
  },
  {
    pdf: "../Form/sample_pds.pdf",
    name: "TV Serial",
  },
  {
    pdf: "../Form/sample_pds.pdf",
    name: "Drama",
  },
];

const Registration = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="Registration">
          <div className="m-3 p-3 bg-gray-700/70 backdrop-blur-[2px] rounded-3xl">
            <div className="header">
              <h1 className="font-[cinzel] text-[gold] text-5xl max-md:text-3xl font-bold text-center p-2">
                2026 Entery Forms
              </h1>
              <hr className="text-white" />
            </div>

            <div className="pdfs flex flex-wrap justify-center items-start gap-5 m-5">
              {pdf.map((id, i) => (
                <div className="pdf w-60 max-md:w-50 relative" key={i}>
                  <iframe src={id.pdf} className="w-full h-56 sm:h-60"></iframe>
                  <a
                    href={id.pdf}
                    target="_blank"
                    download
                    className="w-full flex justify-between p-4 bg-[#941494]/90 
                       backdrop-blur-[1px] text-[gold]  text-2xl 
                       absolute bottom-0 left-0"
                  >
                    <p>{id.name}</p>
                    <i className="fa-solid fa-download"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Registration;
