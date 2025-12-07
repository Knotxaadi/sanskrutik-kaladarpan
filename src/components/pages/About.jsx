import React from "react";
import "./About.css";
import img1 from "../../assets/main-img/0G7A2232.jpg";
import img2 from "../../assets/main-img/show.jpeg";
import img3 from "../../assets/main-img/show2.jpeg";

const About = () => {
  return (
    <>
      <div id="About" className="overflow-hidden  w-full scroll-mt-24">
        <div className="about-sec p-2 m-2 bg-[#721888]/80 rounded-3xl ">
          <div className="head-ab">
            <h1 className="m-2 p-2 text-shadow-teal-500 font-[cinzel] font-bold text-5xl text-center text-[#ddbefd]">
              ABOUT
            </h1>
          </div>
          <hr className="m-2 text-[#b793db]" />
          <div className="about-content flex justify-center gap-5 items-center max-md:flex-col">
            <div className="ab-content-text md:w-[55%]">
              <p className="text-[#FFD37D] text-2xl max-md:text-2xl max-sm:text-[14px] text-shadow-blue-400">
                For 27 memorable years,
                <big>
                  {" "}
                  <b className="text-white">Sanskrutik Kaladarpan</b>
                </big>{" "}
                has carried the torch of culture with pride and purpose. Guided
                by our President,{" "}
                <b className="text-white">Shri Chandrashekar Sandve</b>, we have
                supported and honored artistic excellence across{" "}
                <b>
                  <big className="text-zinc-50">
                    movies, television serials, theatrical dramas, short films &
                    News Channel
                  </big>
                </b>
                , earning respect and awards along the way. Beyond the stage and
                screen, we believe in nurturing the future. Our inter-school
                competitions give young students a platform to explore their
                talent, express their imagination, and step confidently into the
                world of art. Rooted in tradition yet open to tomorrow,
                Sanskrutik Kaladarpan continues to celebrate creativity, inspire
                new voices, and keep the spirit of our cultural heritage alive.
              </p>
            </div>
            <div className="imgg grid grid-cols-2 gap-1">
              <div className="w-120 h-65 max-md:w-80 max-md:h-45 overflow-hidden col-span-2 rounded-2xl">
                <img
                  src={img1}
                  className="object-cover w-full scale-230 -translate-y-24 -translate-x-5 "
                  alt=""
                />
              </div>
              <div className="w-59 h-52 max-md:w-80 max-md:h-50 rounded-2xl overflow-hidden max-md:col-span-2">
                <img className="" src={img2} alt="" />
              </div>
              <div className="w-59 h-52 max-md:w-80 max-md:h-45 rounded-2xl overflow-hidden max-md:col-span-2">
                <img className="" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
