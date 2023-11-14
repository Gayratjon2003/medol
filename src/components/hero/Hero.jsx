import React from "react";
// import slideImg from "../../assets/img/slide.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { useTranslation } from "react-i18next";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import i18next from "i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero mt-119 bg-transparent">
      <div className="container">
        <div className="box">
          <>
            <Swiper
              pagination={{ clickable: true }}
              loop={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {i18next.t("hero.data", { returnObjects: true }).map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slide flex">
                    <div className="left w-1/2">
                      <div className="flex flex-col justify-between items-start">
                        <h1 className="mb-8 text-blue text-50 w-4/5 ">
                          {item?.title}
                        </h1>
                        <p className="text-primary text-2xl mr-[65px]">
                          {item?.text}
                        </p>
                        <a href={item?.link} target="_blank" rel="noreferrer">
                          <button className="mt-11 btn-more-details text-white text-2xl mb-[108px]">
                            {t("moreDetails")}
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="right w-1/2">
                      <img
                        src={process.env.PUBLIC_URL + item?.image_url}
                        alt={item?.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Hero;
