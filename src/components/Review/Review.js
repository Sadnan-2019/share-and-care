import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import reviewone from "../../asset/avater.png";
import reviewtwo from "../../asset/avater.png";
import reviewtthree from "../../asset/avater.png";
import reviewfour from "../../asset/avater.png";
import reviewfive from "../../asset/avater.png";
import review6 from "../../asset/avater.png";
import review7 from "../../asset/avater.png";
import review8 from "../../asset/avater.png";
import review9 from "../../asset/avater.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
// import './Slider.css'
import "./Review.css";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
const Review = () => {
    return (
        <div>
            <div className='gupter-regular '>

<h2 data-aos="zoom-out-up"
  style={{ lineHeight: "120%" }}
  className="animated slide-text text-[25px] lg:text-3xl font-bold   text-center mt-8   text-transparent bg-clip-text bg-gradient-to-r from-[#190D33] to-[#190D33] "
>
  {" "}
  RECENT  CUSTOMER REVIEWS!
</h2>
<div className="h-scren  mb-10    ">
  <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={true}
    navigation={true}
    EffectCoverflow={true}
    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
    className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-4 py-12 px-12 justify-items-center items-center md:px-12 lg:px-20 "
  >
    <div className=" ">
      <SwiperSlide>
        <div class="container mx-auto p-10  px-4">
          <div class="bg-gradient-to-r from-[#190D33] via-[#190D33] to-[#190D33] via-[#190D33] to-[#190D33]   inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex  rounded-lg border shadow-lg pb-6 lg:pb-0">
            <div class="w-full lg:w-1/3 lg:p-4">
              <img
                src={reviewone}
                alt="image"
                class="h-64 lg:h-full object-cover object-center w-full"
              />
            </div>

            <div class="w-full lg:w-2/3 p-4">
              <div class="inline-grid">
                <p class="work-sans font-semibold text-xl text-white">
                  Akm Karamat Hossen Akondo
                </p>
                <p class="raleway text-sm my-4 text-white  ">
                Excellent & Trusted Behavior of this company Caregivers.We are satisfied for this compnay service.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="container mx-auto py-12 px-4">
          <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-gradient-to-r from-[#190D33] via-[#190D33] to-[#190D33] rounded-lg border shadow-lg pb-6 lg:pb-0">
            <div class="w-full lg:w-1/3 lg:p-4">
              <img
                src={reviewtthree}
                alt="image"
                class="h-64 lg:h-full object-cover object-center w-full"
              />
            </div>

            <div class="w-full lg:w-2/3 p-4">
              <div class="inline-grid">
                <p class="work-sans font-semibold text-xl text-white">
                  HCAH Mahmud
                </p>
                <p class="raleway text-sm my-4 text-white opacity-75">
                  I think this organization  is best for  homebased health care .Their behave also remarkable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="container mx-auto py-12 px-4">
          <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-gradient-to-r from-[#190D33] via-[#190D33] to-[#190D33]  rounded-lg border shadow-lg pb-6 lg:pb-0">
            <div class="w-full lg:w-1/3 lg:p-4">
              <img
                src={reviewtwo}
                alt="image"
                class="h-64 lg:h-full object-cover object-center w-full"
              />
            </div>

            <div class="w-full lg:w-2/3 p-4">
              <div class="inline-grid">
                <p class="work-sans font-semibold text-xl text-white">
                  Nahid Hasan
                </p>
                <p class="raleway text-sm my-4 text-white opacity-75">
                One of the best patients care at home in Dhaka.
                  Authentic
                     Reliable
                     
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="container mx-auto py-12 px-4">
          <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-gradient-to-r from-[#190D33] via-[#190D33] to-[#190D33]  rounded-lg border shadow-lg pb-6 lg:pb-0">
            <div class="w-full lg:w-1/3 lg:p-4">
              <img
                src={reviewfour}
                alt="image"
                class="h-64 lg:h-full object-cover object-center w-full"
              />
            </div>

            <div class="w-full lg:w-2/3 p-4">
              <div class="inline-grid">
                <p class="work-sans font-semibold text-xl text-white">
                  Biplob Nebil
                </p>
                <p class="raleway text-sm my-4 text-white opacity-75">
                Nice promising   services, perfect & remembering service 
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="container mx-auto py-12 px-4">
          <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-gradient-to-r from-[#190D33] via-[#190D33] to-[#190D33]  rounded-lg border shadow-lg pb-6 lg:pb-0">
            <div class="w-full lg:w-1/3 lg:p-4">
              <img
                src={reviewfive}
                alt="image"
                class="h-64 lg:h-full object-cover object-center w-full"
              />
            </div>

            <div class="w-full lg:w-2/3 p-4">
              <div class="inline-grid">
                <p class="work-sans font-semibold text-xl text-white">
                  Zahiruddin Mahmud
                </p>
                <p class="raleway text-sm my-4 text-white opacity-75">
                Protocol and Staff were both exceptional. Very responsible and decent behaviour. I would highly recommend all to Share & Care.

                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
     

    </div>
  </Swiper>
</div>
</div>
        </div>
    );
};

export default Review;