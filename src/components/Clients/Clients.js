import React from 'react';
import Marquee from 'react-fast-marquee';
import food1 from "../../asset/avater.png";
import food2 from "../../asset/avater.png";
import food3 from "../../asset/avater.png";
// import food4 from "../../assets/food4.png"
import food5 from "../../asset/avater.png";
import food6 from "../../asset/avater.png";
import food7 from "../../asset/avater.png";
import food8 from "../../asset/avater.png";
import food9 from "../../asset/avater.png";
import food10 from "../../asset/avater.png";
const Clients = () => {
    return (
        <div>
            <div className='gupter-regular  '>
            <h2 data-aos="zoom-out-up"
        style={{ lineHeight: "120%" }}
        className="py-8 animated slide-text text-[25px] lg:text-[35px] font-bold   text-center mt-8   text-transparent bg-clip-text bg-gradient-to-r from-[#0b281c] to-[#e97f06] "
      >
        {" "}
        Services Offered to Patients Returning Home from Leading Hospitals

      </h2>
            <Marquee
                gradientColor={false}
                speed={80}
                gradient={false}

            >
                <div class=" ">
                    {/* <Marquee   gradientColor={false} speed={80} gradient={false} play={true}> */}
                    <div class="   ">
                        <div class="   py-5    gap-5 flex     align-center justify-center    rounded-xl">
                            <img
                                alt=""
                                class="h-24 w-44   p-2   rounded  "
                                src={food1}
                            />

                            <img
                                alt=""
                                class="h-24 w-44  p-2   rounded  "
                                src={food2}
                            />
                            <img
                                alt=""
                                class="h-24 w-44  p-2   rounded  "
                                src={food3}
                            />

                            <img
                                alt=""
                                class="h-24 w-44  p-2   rounded   "
                                src={food9}
                            />
                            <img
                                alt=""
                                class="h-24 w-44   p-2  rounded  "
                                src={food5}
                            />
                            <img
                                alt=""
                                class="h-24 w-44   p-2  rounded  "
                                src={food6}
                            />

                            <img
                                alt=""
                                class="h-24 w-44   p-2  rounded  "
                                src={food7}
                            />
                            <img alt="" class="h-24 w-44   p-2  rounded  " src={food8} />
                            <img alt="" class="h-24 w-44   p-2  rounded  " src={food10} />
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
        </div>
    );
};

export default Clients;