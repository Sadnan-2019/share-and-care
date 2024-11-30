import React from "react";

const Why = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#190D33] via-[#190D33] to-[#080C24]  ">
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

        <div
        className="grid grid-cols-1 py-10  "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="stats ">
          <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
             
            </div>
            <div className="stat-value  " style={{ color: "#453364" }}>
              2,378+
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
              Successful recovery stories
            </div>
            
            {/* <div className="stat-desc text-1xl font-bold">
              21% more than last month
            </div> */}
          </div>
          <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
             
            </div>
            <div className="stat-value  " style={{ color: "#453364" }}>
              2000+
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
            HealthCare related man power in our platform
            </div>
            
            {/* <div className="stat-desc text-1xl font-bold">
              21% more than last month
            </div> */}
          </div>

         

          {/* <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
           
            </div>
            <div
              className="stat-value "
              style={{ color: "#453364" }}
            >
              500+
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
              HealthCare related man power in our platform
            </div>
            
           
          </div> */}
        
          <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
             
            </div>
            <div className="stat-value  " style={{ color: "#453364" }}>
              3000+
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
              Medical assistant
            </div>
            
          
          </div>
          <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
             
            </div>
            <div className="stat-value  " style={{ color: "#453364" }}>
              150+
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
              Physiotherapists
            </div>
            
          
          </div>
          <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
             
            </div>
            <div className="stat-value  " style={{ color: "#453364" }}>
              200+
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
Nurses
            </div>
            
          
          </div>
          <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
             
            </div>
            <div className="stat-value  " style={{ color: "#453364" }}>
              250+
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
              Caregivers
            </div>
            
          
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Why;
