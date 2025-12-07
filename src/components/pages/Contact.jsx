import React from "react";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="scroll-mt-24">
        <div className="contact bg-[#111] m-4 p-2 rounded-2xl">
          <div className="header p-2">
            <h1 className="text-[#dadada] font-[cinzel] font-bold text-4xl text-center">
              Contact Us
            </h1>
          </div>
          <hr className="text-gray-400 m-2" />
          <div className="con-main p-5 flex justify-evenly items-center max-md:flex-col gap-5">
            <div className="address w-1/2 text-gray-300 text-xl max-md:text-[16px] flex flex-col gap-5 justify-center max-md:items-center items-start">
              <div className="email">
                <h2>sanskrutik.kaladarpan98@gmail.com</h2>
              </div>
              <div className="number">
                <p>+91 9324044044</p>
                <p>+91 8850137670</p>
              </div>
              <div className="address">
                <h4>
                  L-12/C/04, Vighnaharta Co.op Society, Pratiksha Nagar , Near
                  Bus Depot, Opp judges Building, Sion ( East ) : Mumbai -
                  400022
                </h4>
              </div>
            </div>
            <div className="con-fill text-gray-300">
              <form
                action="https://formsubmit.co/knotxshashank7@gmail.com"
                method="POST"
              >
                {/* REQUIRED for FormSubmit to work smoothly */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://your-domain.com/thankyou"
                />

                <h1 className="font-bold">Name (required)</h1>

                <div className="names flex gap-5 p-2">
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="firstName"
                      className="peer w-full bg-transparent border-b border-gray-500 focus:outline-none pb-1 pt-4"
                      placeholder=" "
                      required
                    />
                    <label
                      className="absolute left-0 top-1 text-gray-400 text-sm transition-all
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-500
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-white"
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      name="lastName"
                      className="peer w-full bg-transparent border-b border-gray-500 focus:outline-none pb-1 pt-4"
                      placeholder=" "
                      required
                    />
                    <label
                      className="absolute left-0 top-1 text-gray-400 text-sm transition-all
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-500
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-white"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="names flex gap-5 p-2">
                  <div className="relative w-full">
                    <input
                      type="email"
                      name="email"
                      className="peer w-full bg-transparent border-b border-gray-500 focus:outline-none pb-1 pt-4"
                      placeholder=" "
                      required
                    />
                    <label
                      className="absolute left-0 top-1 text-gray-400 text-sm transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-500
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-white"
                    >
                      Email
                    </label>
                  </div>
                </div>

                <div className="names flex gap-5 p-2">
                  <div className="relative w-full">
                    <textarea
                      name="message"
                      className="peer w-full bg-transparent border-b border-gray-500 focus:outline-none pb-1 pt-6 h-24"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      className="absolute left-0 top-1 text-gray-400 text-sm transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-500
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-white"
                    >
                      Message
                    </label>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-center text-[#000000] text-xl bg-[#FFFFFF] font-bold px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
