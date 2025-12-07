import React from "react";
import w1 from "../../assets/work/award-ceremony.jpeg";
import w2 from "../../assets/work/drama-fest.jpeg";
import w3 from "../../assets/work/movie-fest.jpeg";
// import w4 from "/src/assets/work/award-ceremony.jpeg";
import w5 from "../../assets/work/inter-school.jpeg";
// import w6 from "/src/assets/work/0G7A2232.jpg";

const Work = () => {
  let arr = [
    {
      id: 1,
      img: w1,
      header: "Award Ceremony",
      para: "Honoring brilliance that deserves the spotlight.",
    },
    {
      id: 5,
      img: w2,
      header: "Drama Festival",
      para: "Showing Top-10 Drama shows for less price",
    },
    {
      id: 6,
      img: w3,
      header: "Moive Festival",
      para: "Showing Top-10 Drama shows for less price",
    },
    {
      id: 2,
      img: w3,
      header: "Short Film Competition",
      para: "Where imagination takes shape on screen.",
    },
    {
      id: 3,
      img: w5,
      header: "Inter-School Competition",
      para: "Where young talents rise and shine.",
    },
    {
      id: 4,
      img: w1,
      header: "Acting Academy",
      para: "Where talent awakens and actors are born.",
    },
  ];
  return (
    <>
      <div id="Work" className="Works overflow-hidden  w-full scroll-mt-24">
        <div className="work p-2 m-2 bg-[#45209b]/70 backdrop-blur-[2px] rounded-3xl">
          <h1 className="text-5xl text-[gold] font-bold text-center font-[cinzel]">
            Our Work
          </h1>
          <hr className="text-cyan-300 m-2" />
          <div className="cards flex flex-wrap justify-between max-md:justify-center items-center ">
            {arr.map((id, i) => {
              return (
                <div
                  className="cat flex flex-col w-50 max-sm:w-39 max-sm:h-80 items-center bg-[#514075] shadow-2xl hover:shadow-indigo-500 duration-1000 p-2 rounded-2xl h-70 m-1  hover:border-amber-200 hover:border transition-all ease-in-out"
                  key={i}
                >
                  <div className="img ">
                    <img className="h-30 rounded-2xl" src={id.img} alt="" />
                  </div>
                  <div className="header p-2 w-50 max-sm:w-35 flex justify-center flex-col">
                    <h1 className="h-15 max-md:h-18 font-[cinzel] font-bold text-[20px] max-sm:text-[17px] text-[gold] flex justify-center items">
                      {id.header}
                    </h1>
                    <hr className="text-yellow-700 p-2" />
                    <p className="text-[16px] max-sm:text-[14px] text-[white]">
                      {id.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
