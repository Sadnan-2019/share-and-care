import React from "react";

const Why = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#486038] via-[#3342BF] to-[#080C24] via-[#486038] to-[#3c5b28]">
        <div
          id="services"
          class="section relative pt-20 pb-8 md:pt-16 md:pb-0  "
        >
          <div class="container xl:max-w-6xl mx-auto px-4">
            <div class="flex flex-wrap flex-row -mx-4 text-center">
              <div
                class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                //   style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="py-8 mb-12     transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <h3 class="text-4xl leading-normal mb-2 font-bold text-white">
                    Why Choose SHARE & CARE ?
                  </h3>
                  {/* <p class="text-white">
                  This is a wider card with supporting text below as a natural
                  content.
                </p> */}
                </div>
              </div>
              <div
                class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                //   style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="py-8   mb-12   border-b  transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div class="inline-block text-white mb-4">
                    {/* <img src={accelerated} className="w-20" alt="" /> */}
                  </div>
                  <h3 class="text-xl leading-normal mb-2 font-semibold text-white">
                  Affordable 
                  </h3>
                  <p class="text-white">
                    Share & Care Offers you A comprehensive Home HealtCare
                    Service at an affordable Cost.Maintaining Quality &
                    Secured Home Care Solutions.Service Provided By qualified,trained & certified healthcare workers.
                  </p>
                </div>
              </div>
               
              <div
                class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                //   style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="py-8   mb-12   border-b  transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div class="inline-block text-white mb-4">
                    {/* <img src={transparency} className="w-20" alt=""/> */}
                  </div>
                  <h3 class="text-xl leading-normal mb-2 font-semibold text-white">
                    TRANSPARENCY
                  </h3>
                  <p class="text-white">
                    Share & Care Provides all identifying documents of the healthcare workers to the clients.We are 
                    transparent regarding  our services,costing & qualification of our employees.
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
